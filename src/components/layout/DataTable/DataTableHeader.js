import React, { useState } from 'react'
import { Flex } from '../../atoms'
import { ArrowUp, ArrowDown } from '../../../icons/icomera/outline'
import Cell from './DataTableCell'

const buttonStyle = {
    fontFamily: 'heading',
    fontWeight: 'bold',
    fontSize: 0,
    color: 'muted',
    textTransform: 'uppercase',
    letterSpacing: 1,
    outline: 'none'
}

const handleSort = (column, sorting, setSorting, sortData) => {

    const order = 
        sorting.field !== column.field
        ? 'asc'
        : sorting.order === 'asc' 
            ? 'desc' 
            : 'asc'

    setSorting({ field: column.field, order })
    sortData(column.field, order)   
}

const SortButton = ({ column, sortData, sorting, setSorting}) => 
    <Flex
        as='button'
        variant= 'headerTitle'
        color={ sorting.field === column.field ? 'text' : 'muted' }
        onClick={() => handleSort(column, sorting, setSorting, sortData)}
        __themeKey = 'table'
        __css = {{
            appearance: 'none',
            border: 0,
            p: 0,
            bg: 'transparent',
            ...buttonStyle
        }}
    >
        {column.header}
        { sorting.order === 'desc' && sorting.field === column.field && <ArrowUp stroke='text' size={16} />}
        { sorting.order === 'asc' && sorting.field === column.field && <ArrowDown stroke='text' size={16} />}
    </Flex>


const getColumnHeader = (column, sortData, sorting, setSorting) => {
    if (React.isValidElement(column.header)) {
        return column.header
    } else if (column.sortable) {
        return (
            <SortButton column={column} sortData={sortData} sorting={sorting} setSorting={setSorting} />
        )
    } else {
        return (
            <Flex
                variant = 'headerTitle'
                __themeKey = 'table'
                __css = {{
                    ...buttonStyle
                }}
            >
                {column.header}
            </Flex>
        )
    }
}

const Header = React.memo(
({
    columns,
    rows,
    sortData,
    ...rest
}) => {
    const [ sorting, setSorting ] = useState({
        field: '',
        order: 'asc'
    })
    return (
        <Flex
            {...rest}
        >
            { columns.map( (column, index) =>
                <Cell
                    key={index}
                    align={column.align}
                    data={getColumnHeader(column, sortData, sorting, setSorting)}
                    fixed={column.fixed}
                    variant='header'
                    width={column.width || 100 / columns.length}
                />
            )}
        </Flex>
    )
})

export default Header