import React, { useState, useMemo, useCallback, useReducer } from 'react'
import PropTypes from 'prop-types'
import { Checkbox, Flex, Text } from '../../atoms'

import { Table } from '../Table'
import { TableHeader } from '../TableHeader'
import { TableBody } from '../TableBody'
import { TableFooter } from '../TableFooter'
import { TableRow } from '../TableRow'
import { TableCell } from '../TableCell'
import { TablePagination } from '../TablePagination'

import { sortAndFilterData } from '../../utils'
import { getFilters, getPrimary, SortController, SearchController, adjustData } from './utils'

const DataTable = ({
    columns,
    rows,
    perPage,
    page,
    onChangePage,
    onChangePerPage,
    rowsPerPageOptions,
    primary,
    selected,
    onSelectAll,
    onSelectRow,
    sorting,
    setSorting,
    setPage,
    searching,
    setSearching,
    focused,
    setFocused,
    slice,
    totalRows
}) =>
    <Table>
        <TableHeader>
            <TableRow>
                { selected && primary &&
                    <TableCell as='th' sx={{ width: '64px' }}>
                        <Checkbox
                            indeterminate={selected.length > 0 && selected.length < rows.length}
                            checked={rows.length > 0 && selected.length === rows.length}
                            onChange={e => onSelectAll(e)}
                        />
                    </TableCell>
                }
                {columns.map( column => 
                    <TableCell as='th' key={column.field}>
                        <Flex 
                            sx={{ 
                                justifyContent: !column.align ? 'space-between' : column.align === 'end' ? 'flex-end' : 'center', 
                                alignItems: 'center' 
                            }}
                        >
                            { !column.sort &&
                                <Text variant='tableHeader'>
                                    {column.header}
                                </Text>
                            }
                            { column.sort && column.field &&
                                <SortController
                                    field={column.field}
                                    label={column.header}
                                    sorting={sorting}
                                    onSort={setSorting}
                                    setPage={setPage}
                                />
                            }
                            { column.search && column.field &&
                                <SearchController
                                    field={column.field}
                                    searching={searching}
                                    onSearch={setSearching}
                                    focused={focused}
                                    setFocused={setFocused}
                                    setPage={setPage}
                                />
                            }
                        </Flex>
                    </TableCell>
                )}
            </TableRow>
        </TableHeader>
        <TableBody>
            { rows
                .slice(slice.start, slice.end)
                .map( (row, index) => 
                <TableRow
                    key={primary ? row[primary] : index }
                    selected={selected && primary && selected.indexOf(row[primary]) !== -1}>
                    { selected && primary &&
                        <TableCell>
                            <Checkbox
                                checked={selected.indexOf(row[primary]) !== -1}
                                onChange={e => onSelectRow(e, row)}
                            />
                        </TableCell>
                    }
                    { columns.map( column => 
                        <TableCell key={row[primary] + row[column.field]} align={column.align}>
                            { row[column.field] && !column.render
                                ? 
                                <Text>
                                    {row[column.field]}
                                </Text>
                                :
                                column.render(row)
                            }
                        </TableCell>
                    )}
                </TableRow>
            )}
        </TableBody>
        <TableFooter>
            <TableRow>
                <TableCell colSpan={(selected ? columns.length + 1 : columns.length).toString()}>
                    <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                        <Flex>
                            { rows.length < totalRows && 
                                <Text 
                                    pr={3}
                                    mr={3}
                                    sx={{ borderRightWidth: 'thin', borderRightStyle: 'solid', borderRightColor: 'border'  }}
                                >
                                    Filtered: {rows.length} of {rows.length}
                                </Text>
                            }
                            { selected &&
                                <Text color={selected.length > 0 ? 'text' : 'muted'}>
                                    Selected: {selected.length} of {rows.length}
                                </Text>
                            }
                        </Flex>
                        { perPage &&
                            <TablePagination
                                count={rows.length}
                                page={page}
                                rowsPerPage={perPage}
                                rowsPerPageOptions={rowsPerPageOptions}
                                onChangePage={onChangePage}
                                onChangeRowsPerPage={onChangePerPage}
                            />
                        }
                    </Flex>
                </TableCell>
            </TableRow>
        </TableFooter>
    </Table>

const DataTableController = ({
    columns = [],
    rows = [],
    rowsPerPage,
    rowsPerPageOptions = [5, 10, 25],
    primaryKey,
    selected,
    onSelect
}) => {

    rows = useMemo(
        () => adjustData(rows, columns),
        [rows, columns]
    )

    const primary = getPrimary(columns, rows, primaryKey)
    const [focused, setFocused] = useState()
    const [perPage, setPerPage] = useState(rowsPerPage)
    const [page, setPage] = useState(0)
    const [sorting, setSorting] = useState({})
    const [searching, setSearching] = useReducer(
        (state, newState) => {
            return ({...state, ...newState})
        },
        getFilters(columns)
    )
    const modifiedRows = useMemo(
        () => {
            return sortAndFilterData(rows, searching, sorting)
        },
        [rows, sorting, searching]
    )
    const slice = useMemo(
        () => {
            if (perPage) {
                return ({
                    start: page * perPage,
                    end: page * perPage + perPage
                })
            }
            else {
                return ({
                    start: 0,
                    end: modifiedRows.length
                })
            }
        },
        [page, perPage, modifiedRows]
    )

    const handleSelectAll = useCallback(
        e => 
            onSelect(
                e.target.checked
                ? modifiedRows.map( row => row[primary] )
                : []
            ),
        [modifiedRows, primary, onSelect]
    )

    const handleSelectRow = useCallback(
        (e, row) =>
            onSelect(
                e.target.checked
                ? selected.concat(row[primary])
                : selected.filter( val => val !== row[primary] )
            ),
        [primary, selected, onSelect]
    )

    const handleChangePerPage = e => {
        setPerPage( parseInt(e.target.value) )
        setPage(0)
    }

    const handleChangePage = newPage => setPage(newPage)
    
    return (
        <DataTable
            columns={columns}
            rows={modifiedRows}
            perPage={perPage}
            page={page}
            onChangePage={handleChangePage}
            onChangePerPage={handleChangePerPage}
            rowsPerPageOptions={rowsPerPageOptions}
            primary={primary}
            selected={selected}
            onSelectAll={handleSelectAll}
            onSelectRow={handleSelectRow}
            sorting={sorting}
            setSorting={setSorting}
            setPage={setPage}
            searching={searching}
            setSearching={setSearching}
            focused={focused}
            setFocused={setFocused}
            slice={slice}
            totalRows={rows.length}
        />
    )
}

const columnProps = {
    align: PropTypes.oneOf(['start', 'center', 'end']),
    field: function(props, propName) {
        const value = props[propName]
        if (!value) return new Error(`The property '${propName}' in 'columns' must be defined.`)
    },
    header: PropTypes.string,
    render: PropTypes.func,
    primary: PropTypes.bool,
    search: PropTypes.bool,
    show: PropTypes.bool,
    sort: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.func
    ])
}

DataTableController.propTypes = {
    columns: function( props, propName, componentName) {
        const value = props[propName]
        if (!Array.isArray(value)) return new Error(`${propName} must be an array`)
        if (value.length === 0) return new Error(`${propName} must have at least one element`)
        value.forEach(element =>
            PropTypes.checkPropTypes(
                columnProps,
                element,
                'prop',
                `${componentName}.${propName}`,
            ),
        )
    },
    rows: function( props, propName ) {
        const value = props[propName]
        if (!Array.isArray(value)) return new Error(`${propName} must be an array`)
        if (value.length === 0) return new Error(`${propName} must have at least one element`)
    },
    rowsPerPage: PropTypes.number,
    rowsPerPageOptions: PropTypes.array,
    primaryKey: PropTypes.string,
    selected: PropTypes.array,
    onSelect: PropTypes.func
}

export default DataTableController