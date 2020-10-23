import React from 'react'
import { Checkbox, Label } from '../../atoms'

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

export const addCheckboxes = (columns, rows, selected, selectAll, selectRow, primaryKey) => {
    return ([
        {
            field: 'select',
            width: 72,
            fixed: true,
            header:
                <TableCheckbox
                    checked={selected.length === rows.length}
                    indeterminate={ selected.length > 0 && selected.length < rows.length }
                    onChange={e => selectAll(e)}
                >
                    { selected.length > 0 && `(${selected.length})` }
                </TableCheckbox>
            ,
            render: row => 
                <TableCheckbox
                    key={row[primaryKey]}
                    checked={selected.indexOf(row[primaryKey]) !== -1}
                    onChange={e => selectRow(e, row)}
                />,
        },
        ...columns
    ])
}

export const adjustData = (columns, rows) => {

    const renderedColumns = columns
        .filter( c => c.render && !(c.field in rows[0]))

    const renderedFields = row => {
        let obj = {}
        if (renderedColumns.length > 0) {
            renderedColumns.forEach(column => {
                if ( column.sortOn ) {
                    obj[column.field] = column.sortOn(row)
                }
            })
            return obj
        }
        else {
            return
        }
        
    }

    // add the rendered fields to rows
    const adjustedRows = rows.map( row => ({ ...renderedFields(row), ...row }))

    const adjustedColumns = columns
        .map( c => {
            if (!c.sortOn && c.render && !(c.field in rows[0])) {
                console.warn(`Sorting on rendered column '${c.header}' is disabled. To enable, use the 'sortOn' property to return a sortable value eg. sortOn: row => value`)
                c.sortable = false
            }
            else if (c.sortable === undefined) {
                c.sortable = true
            } 
            return c
        })

    return [ adjustedColumns, adjustedRows]
}

export const getPages = (rows, pageSize, primaryKey) => {
    let pages = []
    if( pageSize && rows.length > pageSize ) {
        for ( let index = 0; index < Math.ceil(rows.length / pageSize); index++ ) {
            const start = index * pageSize
            const end = index * pageSize + pageSize
            let page = []
            rows
                .slice( start, end )
                .forEach( row => {
                    page.push(row[primaryKey])
                })
            pages.push( page )
        }
    } else {
        let page = []
        rows.forEach( row => {
            page.push(row[primaryKey])
        })
        pages.push(page)
    }
    return pages
}

export const getPrimary = (columns, primaryKey) => {
    let primary
    columns.forEach( column => {
        if ('primary' in column) {
            primary = column.field
        } else if (primaryKey) {
            primary = primaryKey
        } else {
            primary = columns[0].field
        }
    })
    return primary
}