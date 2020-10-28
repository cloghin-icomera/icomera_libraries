import React, { useCallback, useRef, useEffect } from 'react'

import { TableSortButton } from '../TableSortButton'
import { TableSearchField } from '../TableSearchField'

export const adjustData = (rows, columns) => {

    const renderedColumns = columns
        .filter( c => c.render && !(c.field in rows[0]))

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