import React, { useState } from 'react'
import { Card, Container, Heading, Select } from '../components/atoms'
import { DataTable } from '../components/layout'

const firstNames = ['Billy', 'Elton', 'Michael', 'Elvis', 'Bob', 'James', 'Eric', 'Jimmy']
const lastNames = ['Joel', 'John', 'Jackson', 'Presley', 'Dylan', 'Brown', 'Clapton', 'Marley', 'Hendrix']
const groups = ['First', 'Second', 'Third']

const randVal = data => {
    const index = Math.floor(Math.random() * data.length)
    return data[index]
}

const genRandomID = digits => Math.floor(Math.random() * (10 ** digits))

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
    { field: 'sysid', header: 'ID', width: 70 },
    { field: 'firstName', header: 'First Name', width: 140 },
    { field: 'lastName', header: 'Last Name', width: 140 },
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

const rows = generateRows(20)

export default () => {
    
    const [selected, setSelected] = useState([])

    return (
        <Container p={6}>
            <Card p={4}>
                <button onClick={() => console.log(selected)}>Log Selected</button>
                <DataTable
                    columns={columns}
                    rows={rows}
                    pageSize={6}
                    selected={selected}
                    onSelect={setSelected}
                />
            </Card>
        </Container>
    )
}