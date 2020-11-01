import React, { useCallback, useRef, useEffect } from 'react'

import { TableSortButton } from '../TableSortButton'
import { TableSearchField } from '../TableSearchField'

export const adjustData = (rows, columns) => {    
    // check if columns field has a correspondent inside the rows
    const baseColumns = columns.filter(column => !column.render && column.field)
    if (baseColumns.length > 0 && rows.length > 0) {
        
        baseColumns.forEach(column => {
            rows.forEach(row => {
                if(!row[column.field]) {
                    console.error('row:', row, 'does not include property', column.field, '--> columns:', columns)
                    row[column.field] = '(not found)'
                }
            })
        })
    }

    //
    const renderedColumns = columns
    .filter( c => 
        c.render && c.field && !c.field.includes(rows[0])
    )
    const renderedFields = row => {
        let obj = {}
        if (renderedColumns.length > 0) {
            renderedColumns.forEach(column => {
                if ( column.sort ) {
                    obj[column.field] = column.sort(row)
                }
            })
            return obj
        }
        else {
            return
        }
    }
    // add the rendered fields to rows
    return rows.map( row => ({ ...renderedFields(row), ...row }))
}

export const getFilters = columns => {
    let result = {}
    columns.forEach( column => {
        if( column.search ) { 
            result[column.field] = {
                value : '',
                active: false
            } 
        }
    })
    return result
}

export const getPrimary = (columns, rows, primaryKey) => {

    if (primaryKey) {
        if ( rows.filter(row => row[primaryKey]).length === 0 ) {
            console.error('Could not find property:', primaryKey, 'in rows data. Selection disabled.')
            return false
        }
        return primaryKey
    }

    // find primary key in columns
    const pc = columns.filter(col => col.primary)

    if (pc.length === 1) {
        return pc[0].field
    }
    if (pc.length > 1) {
        console.warn('Multiple primary keys defined, using:', pc[0].field, '--> columns:', pc)
        return pc[0].field
    }
    
    if (columns.length > 0){
        console.warn('No primary key defined. Selection disabled.')
        return false
    }

    return false
}

export const SortController = ({field, label, sorting, onSort, setPage}) => {
    const handleSorting = useCallback(
        () => {
            const value = !sorting[field] ? 'asc' : sorting[field] === 'asc' ? 'desc' : 'asc'
            setPage(0)
            onSort({ [field] : value})
        },
        [sorting, field, onSort, setPage]
    )
    return (
        <TableSortButton label={label} sortOrder={sorting[field]} onSort={handleSorting} />
    )
}

export const SearchController = ({ field, searching, onSearch, focused, setFocused, setPage}) => {

    const inputEl = useRef()

    const handleSearch = useCallback(
        (e) => {
            const query = {
                ...searching,
                [field]: { active: searching[field].active, value: e.target.value }
            }
            setPage(0)
            onSearch(query)
        },
        [field, searching, onSearch, setPage]
    )

    const handleToggle = useCallback(
        () => {
            setFocused(searching[field].active ? null : field)
            const query = {
                ...searching,
                [field]: { active: !searching[field].active, value: '' }
            }
            onSearch(query)
        },
        [field, searching, setFocused, onSearch]
    )

    const handleBlur = useCallback(
        () => setFocused(null),
        [setFocused]
    )
    
    useEffect(() => {
        if(inputEl && focused === field) {
            inputEl.current.focus()
        }
    })

    return (
        <TableSearchField
            active={searching[field].active}
            value={searching[field].value}
            name={field}
            ref={inputEl}
            onSearch={handleSearch}
            onToggle={handleToggle}
            onBlur={handleBlur}
        />
    )
}