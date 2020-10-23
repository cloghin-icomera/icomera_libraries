import React, { useState } from 'react'
import { Box, Button, Card, Container, Switch, Select } from '../components/atoms'
import { DataTable } from '../components/layout'
import { AddCircle } from '../icons/icomera/outline'
import { Error, Success, Warning } from '../icons/icomera/solid'


const randVal = data => {
    const index = Math.floor(Math.random() * data.length)
    return data[index]
}

const genRandomID = digits => Math.floor(Math.random() * (10 ** digits))

const generateRows = number => {
    const rows = [];
    for( let index = 0; index < number; index++) {
        rows.push({
            id: genRandomID(8),
            firstName: randVal(firstNames),
            lastName: randVal(lastNames)
        })
    }
    return rows
}

const sortFunction = (rows, field, direction) => {
    console.log('sorting', rows, field, direction)
    return rows
}

const firstNames = ['Billy', 'Elton', 'Michael', 'Elvis', 'Bob', 'James', 'Eric', 'Jimmy']
const lastNames = ['Joel', 'John', 'Jackson', 'Presley', 'Dylan', 'Brown', 'Clapton', 'Marley', 'Hendrix']

const columns = [
    { field: 'id', header: 'ID', width: 70 },
    { field: 'firstName', header: 'First Name', width: 140 },
    { field: 'lastName', header: 'Last Name', width: 140 },
    {
        field: 'fullName',
        header: 'Full Name',
        width: 100,
        render: row => row.firstName + ' ' + row.lastName,
        customSort: (field, rows, direction) => console.log('custom sort on:', field)
    },
    {
        field: 'group',
        header: 'Group',
        width: 100,
        customSort: (rows, column, direction) => {
            return [...rows].sort( (a, b) => {
                if (a[column] < b[column]) {
                    return direction === 'asc' ? -1 : 1;
                }
                if (a[column] > b[column]) {
                    return direction === 'asc' ? 1 : -1;
                }
                return 0;
            })
        },
        render: row =>
            <Select
                defaultValue='First'
                width='100%'
                onChange={e => console.log(e.target.value)}
            >
                <option>First</option>
                <option>Second</option>
                <option>Third</option>
            </Select>
    }
]

const contentColumns = [
    { 
        field: 'status',
        header: 'Status',
        width: 70,
        render: row => {
            switch(row.status) {
                case 0:
                    return <Error fill='error' />
                case 1:
                    return <Success fill='success' />
                case 2:
                    return <Warning fill='warning' />
                default:
                    return
            }
        }
    },
    { field: 'firstName', header: 'First Name', width: 140 },
    { field: 'lastName', header: 'Last Name', width: 140 },
    {
        align: 'center',
        field: 'debug',
        header: 'Debug Mode',
        width: 48,
        sortFn: sortFunction,
        render: <Switch />
    },
    {
        field: 'actions',
        width: 48,
        render: row => <Button label='Edit' variant='outlined' size='small' onClick={() => alert('row ' + row._uid)} />
    }
]

const contentRows = [
    { status: 1, firstName: 'Billy', lastName: 'Joel' },
    { status: 2, firstName: 'Elton', lastName: 'John' },
    { status: 0, firstName: 'Michael', lastName: 'Jackson' },
    { status: 0, firstName: 'Elvis', lastName: 'Presley' },
    { status: 1, firstName: 'Bob', lastName: 'Dylan' }
]

const echoSelected = data => {
    console.log(data);
}

const rowsA = generateRows(23)
const rowsB = generateRows(57)

const columns_B = [
	{ field: 'field_1', header: 'Label 1'},
	{ field: 'field_2', header: 'Label 2'},
	{ 
        field: 'stroke',
        header: 'Label 3',
        render: row => <AddCircle stroke={row.stroke} />,
        align: 'center'
    }
]

const rows_B = [
	{ field_1 : 'Column 1', field_2: 'Column 2', stroke: 'brand' },
	{ field_1 : 'Column 1', field_2: 'Column 2', stroke: 'error' },
	{ field_1 : 'Column 1', field_2: 'Column 2', stroke: 'text' },
	{ field_1 : 'Column 1', field_2: 'Column 2', stroke: 'brand' },
	{ field_1 : 'Column 1', field_2: 'Column 2', stroke: 'success' }
]


export default () => {
    
    const [selectedA, setSelectedA] = useState([])
    const [selectedB, setSelectedB] = useState([])
    const [selectedC, setSelectedC] = useState([])

    const [selD, setSelD] = useState([])
    
    return (
        <Container p={6}>
            <Box mb={6}>
                <Button
                    onClick={e => 
                        echoSelected( rowsA.filter(
                            (r, index) => selectedA.indexOf(index) !== -1)
                        )
                    }
                    label='Click Me'
                    variant='outlined'
                />
                <DataTable
                    title='Table 1'
                    columns={columns}
                    rows={rowsA}
                    pageSize={7}
                    checkboxSelection
                    selected={selectedA}
                    setSelected={setSelectedA}
                />
            </Box>
            <Card mb={6}>
                <Button
                    onClick={e => 
                        echoSelected( rowsB.filter(
                            (r, index) => selectedB.indexOf(index) !== -1)
                        )
                    }
                    label='Click Me'
                    variant='outlined'
                />
                <DataTable
                    title='Table 2'
                    columns={columns}
                    rows={rowsB}
                    pageSize={10}
                    checkboxSelection
                    selected={selectedB}
                    setSelected={setSelectedB}
                />
            </Card>
            <Card>
                <DataTable
                    title='Table 3'
                    columns={contentColumns}
                    rows={contentRows}
                    checkboxSelection
                    selected={selectedC}
                    setSelected={setSelectedC}
                />
            </Card>
            <DataTable
                columns={columns_B}
                rows={rows_B}
                selected={selD}
                setSelected={setSelD}
                checkboxSelection
            />
        </Container>
    )
}