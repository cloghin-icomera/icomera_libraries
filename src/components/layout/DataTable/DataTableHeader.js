import React, { useState, useCallback } from 'react'
import { Box, Flex, IconButton, Input } from '../../atoms'
import { ArrowUp, ArrowDown, Remove, Search } from '../../../icons/icomera/outline'
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

const SearchField = ({name, value, handleChange, show, toggleShow}) => {
    return (
        <Flex ml='auto'>
            <Box sx={{ flex: '1 1 auto', visibility: show[name] ? 'visible' : 'visible' }}>
                <Input
                    size='small'
                    name={name}
                    value={value}
                    placeholder='filter'
                    onChange={e => handleChange(e)}
                />
            </Box>
            {false &&
                <Box sx={{ flex: '0 0 32px' }}>
                    <IconButton
                        icon={ show[name] ? <Remove /> : <Search />}
                        onClick={() => toggleShow(name)}
                        size='small'
                    />
                </Box>
            }
        </Flex>
    )
}

const getColumnHeader = (column, sortData, sorting, search, handleSearch, show, toggleShow) => {
    if (React.isValidElement(column.header)) {
        return column.header
    } else if (column.sortable) {
        return (
            <>
                <Box sx={{ alignSelf: 'center', flex: '1 1 60%' }}>
                    <SortButton
                        column={column}
                        sortData={sortData}
                        sorting={sorting}
                    />
                </Box>
                { column.search &&
                    <SearchField
                        name={column.field}
                        value={search[column.field]}
                        show={show}
                        toggleShow={toggleShow}
                        handleChange={handleSearch}
                    />
                }
            </>
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
                <Box>
                    {column.header}
                </Box>
                { column.search &&
                    <SearchField
                        name={column.field}
                        value={search[column.field]}
                        handleChange={handleSearch}
                    />
                }
            </Flex>
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

    const [ show, setShow ] = useState({})

    const toggleShow = useCallback(
        name => {
            setShow({
                ...show,
                [name]: !show[name]
            })
        },
        [show, setShow]
    )

    return (
        <Flex
            {...rest}
        >
            { columns.map( (column, index) =>
                <Cell
                    key={index}
                    align={column.align}
                    data={getColumnHeader(column, sortData, sorting, search, handleSearch, show, toggleShow)}
                    fixed={column.fixed}
                    variant='header'
                    width={column.width || 100 / columns.length}
                />
            )}
        </Flex>
    )
})

export default Header