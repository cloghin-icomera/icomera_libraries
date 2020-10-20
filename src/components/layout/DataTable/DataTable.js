import React, { useState, useMemo } from 'react'
import { Box, Checkbox, Label } from '../../atoms'

import Header from './DataTableHeader'
import Body from './DataTableBody'
import Footer from './DataTableFooter'
import Pagination from './DataTablePagination'


const TableCheckbox = (
{
    checked,
    indeterminate,
    onChange,
    children,
    ...props
}) => (
    <Label {...props} sx={{ fontSize: 1, color: 'muted', pl: 1 }}>
        <Checkbox
            checked={checked}
            className={indeterminate ? 'indeterminate' : ''}
            onChange={onChange}
        />
        {children}
    </Label>
)

const getTemplate = columns => (
    columns.map( column => (
        { 
            field: column.field,
            width: column.width || 100 / columns.length,
            render: column.render
        }
    ))
)

const getPages = (rows, pageSize) => {
    let pages = []
    if( pageSize && rows.length > pageSize ) {
        for ( let index = 0; index < Math.ceil(rows.length / pageSize); index++ ) {
            const start = index * pageSize
            const end = index * pageSize + pageSize
            pages.push( rows.slice( start, end ) )
        }
    } else {
        pages.push(rows)
    }
    return pages
}

//TODO: Optimize code so that it only re-renders components that change
const getSelectionColumns = (columns, rows, selected, setSelected) => {
    return ([
        {
            field: 'select',
            width: 32,
            headerObj: (
                <TableCheckbox
                    checked={selected.length === rows.length}
                    indeterminate={
                        selected.length > 0 && selected.length < rows.length
                    }
                    onChange={e => {
                        setSelected(
                            e.target.checked
                            ? rows.map( (r, i) => i )
                            : []
                        )
                    }}
                >
                    { selected.length > 0 && `(${selected.length})` }
                </TableCheckbox>
            ),
            render: (val = null, id) => 
                <TableCheckbox
                    key={id}
                    checked={selected.indexOf(id) !== -1}
                    onChange={e => {
                        setSelected(
                            e.target.checked
                            ? selected.concat(id)
                            : selected.filter( val => val !== id )
                        )
                    }}
                />,
        },
        ...columns
    ])
}

const generateRowsUID = rows =>
    rows.map((row, index) => (
        {
            uid : index,
            ...row
        }
    ))

const DataTable = React.forwardRef(
({
    title,
    rows = [],
    columns = [],
    pageSize,
    checkboxSelection = false,
    selected,
    setSelected,
    ...props
}, ref ) => {
    
    const [activePage, setActivePage] = useState(0)

    rows = generateRowsUID(rows)

    const [sortedRows, setSortedRows ] = useState(rows)

    if (checkboxSelection) {
        columns = useMemo(
            () => getSelectionColumns(columns, sortedRows, selected, setSelected),
            [columns, sortedRows, selected, setSelected]
        )
    }

    const template = useMemo(
        () => getTemplate(columns),
        [columns]
    )
    
    const pages = useMemo(
        () => getPages(sortedRows, pageSize),
        [sortedRows, pageSize]
    )

    return (
        <Box ref={ref} {...props}>
            <Header columns={columns} rows={rows} setSorted={setSortedRows} />
            <Body
                pages={pages}
                activePage={activePage}
                template={template}
                pageSize={pageSize}
                selected={selected}
            />
            { pageSize && sortedRows.length > pageSize &&
                <Footer>
                    <Pagination pages={pages} active={activePage} setActive={setActivePage} />
                </Footer>
            }
        </Box>
    )
})

export default DataTable