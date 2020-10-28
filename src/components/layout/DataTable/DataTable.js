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

import { sortAndFilterData } from '../Table/utils'
import { getFilters, SortController, SearchController, adjustData } from './utils'

const DataTable = ({
    columns,
    rows,
    rowsPerPage,
    rowsPerPageOptions = [5, 10, 25],
    primaryKey,
    selected,
    onSelect
}) => {

    rows = adjustData(rows, columns)

    const primary = columns.filter(col => col.primary).field || primaryKey || columns[0].field
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
        <Table>
            <TableHeader>
                <TableRow>
                    { selected &&
                        <TableCell as='th' sx={{ width: '64px' }}>
                            <Checkbox
                                indeterminate={selected.length > 0 && selected.length < modifiedRows.length}
                                checked={modifiedRows.length > 0 && selected.length === modifiedRows.length}
                                onChange={e => handleSelectAll(e)}
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
                                { column.sort &&
                                    <SortController
                                        field={column.field}
                                        label={column.header}
                                        sorting={sorting}
                                        onSort={setSorting}
                                        setPage={setPage}
                                    />
                                }
                                { column.search &&
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
                { modifiedRows
                    .slice(slice.start, slice.end)
                    .map( row => 
                    <TableRow key={row[primary]} selected={selected.indexOf(row[primary]) !== -1}>
                        { selected &&
                            <TableCell>
                                <Checkbox
                                    checked={selected.indexOf(row[primary]) !== -1}
                                    onChange={e => handleSelectRow(e, row)}
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
                                { modifiedRows.length < rows.length && 
                                    <Text 
                                        pr={3}
                                        mr={3}
                                        sx={{ borderRightWeight: 'thin', borderRightStyle: 'solid', borderRightColor: 'border'  }}
                                    >
                                        Filtered: {modifiedRows.length} of {rows.length}
                                    </Text>
                                }
                                <Text color={selected.length > 0 ? 'text' : 'muted'}>
                                    Selected: {selected.length} of {rows.length}
                                </Text>
                            </Flex>
                            { perPage &&
                                <TablePagination
                                    count={modifiedRows.length}
                                    page={page}
                                    rowsPerPage={perPage}
                                    rowsPerPageOptions={rowsPerPageOptions}
                                    onChangePage={handleChangePage}
                                    onChangeRowsPerPage={handleChangePerPage}
                                />
                            }
                        </Flex>
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}

DataTable.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            align: PropTypes.oneOf(['start', 'center', 'end']),
            field: PropTypes.string.isRequired,
            header: PropTypes.string,
            render: PropTypes.func,
            primary: PropTypes.bool,
            search: PropTypes.bool,
            sort: PropTypes.oneOfType([
                PropTypes.bool,
                PropTypes.func
            ])
        })
    ).isRequired,
    rows: PropTypes.array.isRequired,
    rowsPerPage: PropTypes.number,
    rowsPerPageOptions: PropTypes.array,
    primaryKey: PropTypes.string,
    selected: PropTypes.array,
    onSelect: PropTypes.func
}

export default DataTable