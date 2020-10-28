import React, { useState, useMemo, useCallback, useReducer, useRef, useEffect } from 'react'
import { Card, Checkbox, Container, Flex, Select, Text } from '../components/atoms'
import {
    DataTable,
    Table,
    TableHeader,
    TableRow,
    TableCell,
    TableBody,
    TableFooter,
    TableSortButton,
    TableSearchField,
    TablePagination
} from '../components/layout'

import { sortAndFilterData } from '../components/layout/Table/utils'

const firstNames = ['Billy', 'Elton', 'Michael', 'Elvis', 'Bob', 'James', 'Eric', 'Jimmy', 'Lewis', 'Valteri', 'Max', 'Alex', 'Charles', 'Sebastian']
const lastNames = ['Joel', 'John', 'Jackson', 'Presley', 'Dylan', 'Brown', 'Clapton', 'Marley', 'Hendrix', 'Hamilton', 'Bottas', 'Verstappen', 'Albon', 'Leclerc', 'Vettel']
const groups = ['First', 'Second', 'Third', 'Fourth', 'Fifth']

const randVal = data => {
    const index = Math.floor(Math.random() * data.length)
    return data[index]
}

const genRandomID = digits => Math.floor((10 ** (digits-1)) + Math.random() * (10 ** digits))

const generateRows = number => {
    const rows = [];
    for( let index = 0; index < number; index++) {
        rows.push({
            sysid: genRandomID(8),
            firstName: randVal(firstNames),
            lastName: randVal(lastNames),
            group: randVal(groups)
        })
    }
    return rows
}

const columns = [
    { field: 'sysid', header: 'ID', sort: true, search: true },
    { field: 'firstName', header: 'First Name', sort: true, search: true },
    { field: 'lastName', header: 'Last Name', sort: true, search: true },
    {
        field: 'fullName',
        header: 'Full Name',
        render: row =>
            <Text>
                {row.firstName} {row.lastName}
            </Text>
        ,
        sort: row => row.firstName + ' ' + row.lastName
    },
    {
        field: 'group',
        header: 'Group',
        render: row =>
            <Select
                defaultValue={row.group}
                width='100%'
                onChange={e => {
                    row.group = e.target.value
                    console.log(row)
                }}
            >
                { groups.map(group => 
                    <option key={group}>{group}</option>
                )}
            </Select>
    }
]

const rows = generateRows(1500)

const basicColumns = [
    {
        field: 'id',
        header: 'System ID',
        sort: true,
        search: true,
        primary: true
    },
    {
        field: 'firstName',
        header: 'First Name',
        sort: true,
        search: true,
    },
    {
        field: 'lastName',
        header: 'Last Name',
        sort: true
    }
]

const basicRows = [
    { id: 231, firstName: 'John', lastName: 'Black' },
    { id: 431, firstName: 'David', lastName: 'Brown' },
    { id: 532, firstName: 'Mike', lastName: 'Green' },
    { id: 819, firstName: 'Bob', lastName: 'White' },
    { id: 210, firstName: 'Chad', lastName: 'Brewster' },
    { id: 187, firstName: 'John', lastName: 'Black' },
    { id: 901, firstName: 'David', lastName: 'Brown' },
    { id: 761, firstName: 'Mike', lastName: 'Green' },
    { id: 301, firstName: 'Bob', lastName: 'White' },
    { id: 457, firstName: 'Chad', lastName: 'Brewster' },
    { id: 110, firstName: 'John', lastName: 'Black' },
    { id: 118, firstName: 'David', lastName: 'Brown' },
    { id: 999, firstName: 'Mike', lastName: 'Green' },
    { id: 612, firstName: 'Bob', lastName: 'White' },
    { id: 399, firstName: 'Chad', lastName: 'Brewster' }
] 

const SortController = ({field, label, sorting, onSort, setPage}) => {
    const handleSorting = useCallback(
        () => {
            const value = !sorting[field] ? 'asc' : sorting[field] === 'asc' ? 'desc' : 'asc'
            onSort({ [field] : value})
            setPage(0)
        },
        [sorting, field, onSort, setPage]
    )
    return (
        <TableSortButton label={label} sortOrder={sorting[field]} onSort={handleSorting} />
    )
}

const SearchController = ({ field, searching, onSearch, focused, setFocused, setPage}) => {

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

export default () => {
    
    const [selectedData, setSelectedData] = useState([])

    const primary = basicColumns.filter(col => col.primary).field || basicColumns[0].field 
    const [selected, setSelected] = useState([])
    const [sorting, setSorting] = useState({})
    const [focused, setFocused] = useState()
    const [searching, setSearching] = useReducer(
        (state, newState) => {
            return ({...state, ...newState})
        },
        {
            id: { value: '', active: false },
            firstName: { value: '', active: false}
        }
    )
    
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [page, setPage] = useState(0)
    const modifiedRows = useMemo(
        () => {
            return sortAndFilterData(basicRows, searching, sorting)
        },
        [sorting, searching]
    )

    const handleSelectAll = useCallback(
        e => 
            setSelected(
                e.target.checked
                ? modifiedRows.map( row => row[primary] )
                : []
            ),
        [modifiedRows, primary]
    )
    
    const handleSelectRow = (e, row) =>
        setSelected(
            e.target.checked
            ? selected.concat(row[primary])
            : selected.filter( val => val !== row[primary] )
        )

    const handleChangeRowsPerPage = e => {
        setRowsPerPage( parseInt(e.target.value) )
        setPage(0)
    }

    const handleChangePage = newPage => setPage(newPage)

    return (
        <Container p={6}>
            <Card p={4}>
            <DataTable
                columns={columns}
                rows={rows}
                rowsPerPage={10}
                selected={selectedData}
                onSelect={setSelectedData}
            />
            </Card>
            <Card mt={6} p={4}>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableCell as='th' sx={{ width: '64px' }}>
                                <Checkbox
                                    indeterminate={selected.length > 0 && selected.length < modifiedRows.length}
                                    checked={modifiedRows.length > 0 && selected.length === modifiedRows.length}
                                    onChange={e => handleSelectAll(e)}
                                />
                            </TableCell>
                            { basicColumns.map( column =>
                                <TableCell as='th' key={column.field}>
                                    <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                        { !column.sort && <Text variant='tableHeader'>{column.header}</Text> }
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
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map( row => 
                            <TableRow key={row[primary]} selected={selected.indexOf(row[primary]) !== -1}>
                                <TableCell>
                                    <Checkbox
                                        checked={selected.indexOf(row[primary]) !== -1}
                                        onChange={e => handleSelectRow(e, row)}
                                    />
                                </TableCell>
                                { basicColumns.map( column => 
                                    <TableCell key={row[column.field]}>
                                        <Text>{row[column.field]}</Text>
                                    </TableCell>
                                )}
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan='4'>
                                <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Flex>
                                        { modifiedRows.length < basicRows.length && 
                                            <Text 
                                                pr={3}
                                                mr={3}
                                                sx={{ borderRightWeight: 'thin', borderRightStyle: 'solid', borderRightColor: 'border'  }}
                                            >
                                                Filtered: {modifiedRows.length} of {basicRows.length}
                                            </Text>
                                        }
                                        <Text color={selected.length > 0 ? 'text' : 'muted'}>
                                            Selected: {selected.length} of {basicRows.length}
                                        </Text>
                                    </Flex>
                                    <TablePagination
                                        count={modifiedRows.length}
                                        page={page}
                                        rowsPerPage={rowsPerPage}
                                        rowsPerPageOptions={[5, 10, 25]}
                                        onChangePage={handleChangePage}
                                        onChangeRowsPerPage={handleChangeRowsPerPage}
                                    />
                                </Flex>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </Card>
        </Container>
    )
}