import React, { useState, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Box } from '../../atoms'

import Header from './DataTableHeader'
import Body from './DataTableBody'
import Footer from './DataTableFooter'
import Pagination from './DataTablePagination'

import { addCheckboxes, adjustData, getPages, getPrimary } from './utils'

const DataTable = React.forwardRef(
({
    columns = [],
    pageSize = undefined,
    primaryKey = undefined,
    rows = [],
    selected = undefined,
    onSelect = undefined,
    title = undefined,
    ...rest
}, ref ) => {

    const primary = useMemo(
        () => getPrimary(columns, primaryKey),
        [columns, primaryKey]
    )
    
    let [adjustedColumns, adjustedRows] = useMemo(
        () => adjustData(columns, rows),
        [columns, rows]
    )

    const [activePage, setActivePage] = useState(0)
    const [sortedRows, setSortedRows] = useState(adjustedRows)
    
    const selectAll = useCallback(
        e => {
            if (!onSelect) {
                console.warn("To enable selection, provide the 'onSelect' function to 'DataTable' component. If you are storing select state via a 'useState' hook, you can do something like: '<DataTable select={select} onSelect={setSelect} />'. See https://bit.dev/icomera/components/layout/data-table for more information.")
            } else {
                onSelect(
                    e.target.checked
                    ? sortedRows.map( row => row[primary] )
                    : []
                )
            }
        },
        [primary, sortedRows, onSelect]
    )

    const selectRow = useCallback(
        (e, row) => {
            if (!onSelect) {
                console.warn("To enable selection, provide the 'onSelect' function to 'DataTable' component. If you are storing select state via a 'useState' hook, you can do something like: '<DataTable select={select} onSelect={setSelect} />'. See https://bit.dev/icomera/components/layout/data-table for more information.")
            } else {
                onSelect(
                    e.target.checked
                    ? selected.concat(row[primary])
                    : selected.filter( val => val !== row[primary] )
                )
            }
        },
        [primary, selected, onSelect]
    )

    const sortData = useCallback(
        (field, direction) => {
            console.log('sort function called:', field, direction)
            const sorted = [...adjustedRows].sort(
                (a, b) => {
                    if (a[field] < b[field]) {
                        return direction === 'asc' ? -1 : 1;
                    }
                    if (a[field] > b[field]) {
                        return direction === 'asc' ? 1 : -1;
                    }
                    return 0;
                }
            )
            setSortedRows(sorted)
        },
        [adjustedRows, setSortedRows]
    )

    if (selected) {
        adjustedColumns = useMemo(
            () => addCheckboxes(adjustedColumns, sortedRows, selected, selectAll, selectRow, primary),
            [adjustedColumns, sortedRows, selected, selectAll, selectRow, primary]
        )
    }
    
    const pages = useMemo(
        () => getPages(sortedRows, pageSize, primary),
        [sortedRows, pageSize, primary]
    )

    return (
        <Box ref={ref} {...rest}>
            <Header
                columns={adjustedColumns}
                rows={adjustedRows}
                setSorted={setSortedRows}
                sortData={sortData}
            />
            <Body
                pages={pages}
                activePage={activePage}
                pageSize={pageSize}
                selected={selected}
                columns={adjustedColumns}
                rows={sortedRows}
                primary={primary}
            />
            { pageSize && sortedRows.length > pageSize &&
                <Footer>
                    <Pagination pages={pages} active={activePage} setActive={setActivePage} />
                </Footer>
            }
        </Box>
    )
})

DataTable.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            align: PropTypes.oneOf([
                'center',
                'left',
                'right'
            ]),
            field: PropTypes.string.isRequired,
            fixed: PropTypes.bool,
            header: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ]),
            render: PropTypes.oneOfType([
                PropTypes.func,
                PropTypes.element
            ]),
            primary: PropTypes.bool,
            sortable: PropTypes.bool,
            sortOn: PropTypes.oneOfType([
                PropTypes.func,
                PropTypes.string,
                PropTypes.number
            ]),
            width: PropTypes.number,
        })
    ).isRequired,
    rows: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSelect: PropTypes.func,
    pageSize: PropTypes.number,
    primaryKey: PropTypes.string,
    selected: PropTypes.array,
    title: PropTypes.string,
}

export default DataTable