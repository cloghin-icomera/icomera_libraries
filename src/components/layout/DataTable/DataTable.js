import React, { useState, useMemo, useCallback, useReducer } from 'react'
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

    let initialState = {}
    columns.forEach( column => {
        if( column.search ) { initialState[column.field] = '' }
    })

    const [activePage, setActivePage] = useState(0)
    const [filtered, setFiltered] = useState(adjustedRows)
    const [perPage, setPerPage] = useState(pageSize)
    const [sorting, setSorting] = useState({})

    const [search, setSearch] = useReducer(
        (state, newState) => {
            return ({...state, ...newState})
        },
        initialState
    )
    
    const selectAll = useCallback(
        e => {
            if (!onSelect) {
                console.warn("To enable selection, provide the 'onSelect' function to 'DataTable' component. If you are storing select state via a 'useState' hook, you can do something like: '<DataTable select={select} onSelect={setSelect} />'. See https://bit.dev/icomera/components/layout/data-table for more information.")
            } else {
                console.log(e.target.checked)
                onSelect(
                    e.target.checked
                    ? filtered.map( row => row[primary] )
                    : []
                )
            }
        },
        [primary, filtered, onSelect]
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
            const sorted = [...filtered].sort(
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
            setSorting({field, direction})
            setFiltered(sorted)
        },
        [filtered]
    )

    if (selected) {
        adjustedColumns = useMemo(
            () => addCheckboxes(
                adjustedColumns,
                filtered,
                selected,
                selectAll,
                selectRow,
                primary)
            ,
            [adjustedColumns, filtered, selected, selectAll, selectRow, primary]
        )
    }
    
    // Search

    const handleSearch = event => {
        const {name, value} = event.target
        setSearch({[name] : value})
        if (selected) {
            filterSelected(name, value)
        }
        filterAll(name, value)
    }

    const filterAll = useCallback(
        (field, query) => {

            let rows = adjustedRows

            // if sorting is active, sort the rows before filtering
            if(Object.keys(sorting).length !== 0) {
                rows = [...rows].sort(
                    (a, b) => {
                        if (a[sorting.field] < b[sorting.field]) {
                            return sorting.direction === 'asc' ? -1 : 1;
                        }
                        if (a[sorting.field] > b[sorting.field]) {
                            return sorting.direction === 'asc' ? 1 : -1;
                        }
                        return 0;
                    }
                )
            }

            const previous = rows.filter( row => {
                let match = true
                for ( const prop in search) {
                    const source = row[prop].toString().toLowerCase()
                    const target = search[prop].toLowerCase()
                    if (!source.includes(target) && prop !== field) {
                        match = false
                    }
                }
                return match
            })
            const result = previous.filter(row => 
                row[field].toString().toLowerCase().includes(query.toLowerCase())
            )

            setActivePage(0)
           
            setFiltered(result)
        },
        [search, adjustedRows, sorting]
    )

    const filterSelected = useCallback(
        (field, query) => {
            const filtered = adjustedRows.filter(row => row[field].toString().toLowerCase().includes(query.toLowerCase()))
            const filteredIDs = filtered.map(row => row[primary])
            const result = selected.filter(id => filteredIDs.indexOf(id) !== -1)
            onSelect(result)
        },
        [selected, onSelect, adjustedRows, primary]
    )

    // pages

    const pages = useMemo(
        () => getPages(
            filtered,
            perPage,
            primary)
        ,
        [filtered, perPage, primary]
    )

    const handlePerPage = useCallback(
        number => {
            if( activePage > Math.ceil(
                filtered.length / number
                )) {
                setActivePage(Math.ceil(
                    filtered.length / number
                ) - 1 )
            }
            setPerPage(number)
        },
        [activePage, filtered]
    )

    return (
        <Box ref={ref} {...rest}>
            <Header
                columns={adjustedColumns}
                sortData={sortData}
                sorting={sorting}
                search={search}
                handleSearch={handleSearch}
            />
            <Body
                activePage={activePage}
                columns={adjustedColumns}
                selected={selected}
                rows={filtered}
                pages={pages}
                primary={primary}
            />
            { filtered.length > perPage &&
                <Footer>
                    <Pagination
                        totalPages={pages.length}
                        totalRows={filtered.length}
                        active={activePage}
                        setActive={setActivePage}
                        perPage={perPage}
                        handlePerPage={handlePerPage}
                    />
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
            search: PropTypes.bool,
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
    pageSize: PropTypes.oneOf([
        5, 10, 20, 50
    ]),
    primaryKey: PropTypes.string,
    selected: PropTypes.array,
    title: PropTypes.string,
}

export default DataTable