import React, { useState } from 'react'
import { Box, Close, Flex, IconButton, Input } from '../../atoms'
import { ArrowUp, ArrowDown, Search } from '../../../icons/icomera/outline'
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

const handleSort = (column, sorting, sortData) => {

    const order = 
        sorting.field !== column.field
        ? 'asc'
        : sorting.direction === 'asc' 
            ? 'desc' 
            : 'asc'

    sortData(column.field, order)
      
}

const SortButton = ({ column, sortData, sorting, ...rest}) => 
    <Flex
        as='button'
        variant= 'headerTitle'
        color={ sorting.field === column.field ? 'text' : 'muted' }
        onClick={() => handleSort(column, sorting, sortData)}
        __themeKey = 'table'
        __css = {{
            appearance: 'none',
            border: 0,
            p: 0,
            bg: 'transparent',
            ...buttonStyle
        }}
        {...rest}
    >
        {column.header}
        { sorting.direction === 'desc' && sorting.field === column.field && <ArrowUp stroke='text' size={16} />}
        { sorting.direction === 'asc' && sorting.field === column.field && <ArrowDown stroke='text' size={16} />}
    </Flex>

const getColumnHeader = (column, sortData, sorting, search, handleSearch) => {
    if (React.isValidElement(column.header)) {
        return column.header
    } else if (column.sortable) {
        return (
            <Flex sx={{ flexWrap: 'wrap', position: 'relative' }}>
                { column.search && 
                    <IconButton icon={<Search />} onClick={() => console.log('hello world')} size='small' ml={-2} />
                }
                <SortButton column={column} sortData={sortData} sorting={sorting} sx={{ alignSelf: 'center' }} />
                { column.search &&
                    <Input
                        size='small'
                        name={column.field}
                        value={search[column.field]}
                        onChange={e => handleSearch(e)} 
                    />
                }
                { column.search &&
                    <Box sx={{ position: 'absolute', zIndex: 1, right: 0, bottom: 0 }}>
                        <Close p={1} size='small' onClick={() => console.log('close')} />
                    </Box>
                }
            </Flex>
        )
    } else {
        return (
            <>
                <Search stroke='muted' />
                <Flex
                    variant = 'headerTitle'
                    __themeKey = 'table'
                    __css = {{
                        ...buttonStyle
                    }}
                >
                    {column.header}
                </Flex>
            </>
        )
    }
}

const Header = React.memo(
({
    columns,
    sortData,
    search,
    sorting,
    handleSearch,
    ...rest
}) => {

    return (
        <Flex
            {...rest}
        >
            { columns.map( (column, index) =>
                <Cell
                    key={index}
                    align={column.align}
                    data={getColumnHeader(column, sortData, sorting, search, handleSearch)}
                    fixed={column.fixed}
                    variant='header'
                    width={column.width || 100 / columns.length}
                />
            )}
        </Flex>
    )
})

export default Header