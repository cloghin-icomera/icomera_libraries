import React, { useState } from 'react'
import { Card, Container, Select, Text } from '../components/atoms'
import {
    DataTable
} from '../components/layout'

const firstNames = ['Billy', 'Elton', 'Michael', 'Elvis', 'Bob', 'James', 'Eric', 'Jimmy', 'Lewis', 'Valteri', 'Max', 'Alex', 'Charles', 'Sebastian']
const lastNames = ['Joel', 'John', 'Jackson', 'Presley', 'Dylan', 'Brown', 'Clapton', 'Marley', 'Hendrix', 'Hamilton', 'Bottas', 'Verstappen', 'Albon', 'Leclerc', 'Vettel']
const groups = ['First', 'Second', 'Third', 'Fourth', 'Fifth']

const randVal = data => {
    const index = Math.floor(Math.random() * data.length)
    return data[index]
}

const genRandomID = digits => Math.floor((10 ** (digits-1)) + Math.random() * (9 * 10 ** (digits-1)))

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
    { field: 'sysid', header: 'ID', sort: true, search: true, primary: true, show: false },
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

const rows = generateRows(100)

export default () => {
    
    const [selectedData, setSelectedData] = useState([])

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
        </Container>
    )
}