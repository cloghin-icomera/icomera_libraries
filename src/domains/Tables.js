import React, { useState, useCallback, useReducer, useRef } from 'react'
import { Card, Container, Flex, Heading, Select, Text } from '../components/atoms'
import {
    DataTable,
    Table,
    TableHeader,
    TableRow,
    TableCell,
    TableBody,
    TableFooter,
    TableSortButton,
    TableSearchField
} from '../components/layout'

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
    { field: 'sysid', header: 'ID', width: 100, search: true },
    { field: 'firstName', header: 'First Name', width: 140, search: true },
    { field: 'lastName', header: 'Last Name', width: 140, search: true },
    {
        field: 'fullName',
        header: 'Full Name',
        width: 100,
        render: row =>
            <Heading as='h4'>
                {row.firstName} {row.lastName}
            </Heading>
        ,
        sortOn: row => row.firstName + ' ' + row.lastName
    },
    {
        field: 'group',
        header: 'Group',
        width: 100,
        render: row =>
            <Select
                defaultValue={row.group}
                width='100%'
                onChange={e => {
                    row.group = e.target.value
                    console.log(row)
                }}
            >
                {groups.map((group, index) => 
                    <option key={index}>{group}</option>
                )}
            </Select>
    }
]

const rows = generateRows(50)

const basicColumns = [
    {
        field: 'id',
        header: 'System ID',
        sort: true,
        search: true,
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
    { id: 210, firstName: 'Chad', lastName: 'Brewster' }
]

const DTJSX = ({selected, setSelected}) =>
 <DataTable
    columns={columns}
    rows={rows}
    pageSize={5}
    selected={selected}
    onSelect={setSelected}
    />

const SortController = ({field, label, sorting, onSort}) => {
    const handleSorting = useCallback(
        () => {
            const value = !sorting[field] ? 'asc' : sorting[field] === 'asc' ? 'desc' : 'asc'
            onSort({ [field] : value})
        },
        [sorting, field, onSort]
    )
    return (
        <TableSortButton label={label} sortOrder={sorting[field]} onSort={handleSorting} />
    )
}

const SearchController = ({field, searching, onSearch}) => {

    const inputEl = useRef(null)

    const handleSearch = useCallback(
        (e) => {
            onSearch({
                [field]: { ...searching[field], value: e.target.value }
            })
        },
        [field, searching, onSearch]
    )

    const handleToggle = useCallback(
        () => {
            console.log(searching[field])
            inputEl.current.focus()
            onSearch({
                [field]: { value: '', active: !searching[field].active }
            })
        },
        [field, searching, onSearch]
    )

    return (
        <TableSearchField
            active={searching[field].active}
            value={searching[field].value}
            ref={inputEl}
            onSearch={handleSearch}
            onToggle={handleToggle}
        />
    )
}

export default () => {
    
    const [selected, setSelected] = useState([])
    const [sorting, setSorting] = useState({})
    const [activeSearch, setActiveSearch] = useState([])
    const [searching, setSearching] = useReducer(
        (state, newState) => {
            return ({...state, ...newState})
        },
        {
            id: { value: '', active: false },
            firstName: { value: '', active: false}
        }
    )

    return (
        <Container p={6}>
            <Card mt={6} p={4}>
                <Table>
                    <TableHeader>
                        <TableRow>
                            { basicColumns.map( column =>
                                <TableCell key={column.field}>
                                    <Flex sx={{ justifyContent: 'space-between' }}>
                                        { !column.sort && <Text variant='tableHeader'>{column.header}</Text> }
                                        { column.sort &&
                                            <SortController field={column.field} label={column.header} sorting={sorting} onSort={setSorting}/>
                                        }
                                        { column.search &&
                                            <SearchController field={column.field} searching={searching} onSearch={setSearching} />
                                        }
                                    </Flex>
                                </TableCell>
                            )}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        { basicRows.map( row => 
                            <TableRow key={row.id}>
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
                            <TableCell>
                                    <Text>The footer</Text>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </Card>
        </Container>
    )
}