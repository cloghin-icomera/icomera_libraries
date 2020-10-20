import React, { useState } from 'react'
import { Box, Button, Card, Container, Switch } from '../components/atoms'
import { DataTable } from '../components/layout'
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
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First Name', width: 140 },
    { field: 'lastName', headerName: 'Last Name', width: 140 }
]

const rows = [
    { id: 1, firstName: 'Billy', lastName: 'Joel' },
    { id: 2, firstName: 'Elton', lastName: 'John' },
    { id: 3, firstName: 'Michael', lastName: 'Jackson' },
    { id: 4, firstName: 'Elvis', lastName: 'Presley' },
    { id: 5, firstName: 'Bob', lastName: 'Dylan' },
    { id: 6, firstName: 'James', lastName: 'Brown' },
    { id: 7, firstName: 'Eric', lastName: 'Clapton' },
    { id: 8, firstName: 'Bob', lastName: 'Marley' },
    { id: 9, firstName: 'Jimmy', lastName: 'Hendrix' }
]

const contentColumns = [
    { 
        field: 'status',
        headerName: 'Status',
        width: 70,
        render: value => {
            switch(value) {
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
    { field: 'firstName', headerName: 'First Name', width: 140 },
    { field: 'lastName', headerName: 'Last Name', width: 140 },
    {
        field: 'debug',
        headerName: 'Debug Mode',
        width: 48,
        sortFn: sortFunction,
        render: () => <Switch m='auto' />
    },
    {
        //field: 'actions',
        headerName: 'Actions',
        width: 48,
        render: () => <Button label='Edit' variant='outlined' />
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

export default () => {
    
    const [selectedA, setSelectedA] = useState([])
    const [selectedB, setSelectedB] = useState([])
    const [selectedC, setSelectedC] = useState([])
    
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
        </Container>
    )
}