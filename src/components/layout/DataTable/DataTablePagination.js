import React from 'react'
import { Box, Flex, IconButton, Select } from '../../atoms'
import { ArrowEnd, ArrowLeft, ArrowRight, ArrowStart } from '../../../icons/icomera/outline'

const Pagination = (
    {
        totalPages,
        totalRows,
        perPage,
        active,
        setActive,
        handlePerPage
    }
) => {
    const start = active === 0 ? 1 : active * perPage + 1
    const end = active === (totalPages - 1) ? totalRows : active * perPage + perPage
    return (
        <Flex sx={{ ml: 'auto', alignItems: 'center' }}>
            <Flex mr={2} sx={{ alignItems: 'center' }}>
                Rows per page:
                <Select
                    defaultValue={perPage}
                    sx={{ width: 64, ml: 2 }}
                    onChange={e => {
                            handlePerPage(parseInt(e.target.value))
                        }
                    }
                >
                    <option>5</option>
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                </Select>
            </Flex>
            <Box mx={4} color='muted'>
                {start}–{end} of {totalRows}
            </Box>
            <Box>
                { totalPages >= 10 && 
                    <IconButton 
                        icon={<ArrowStart />}
                        onClick={() => {
                            setActive(0)
                        }}
                    />
                }
                <IconButton 
                    icon={<ArrowLeft />}
                    onClick={() => {
                        const index = (active - 1) >= 0 ? (active - 1) : totalPages - 1
                        setActive(index)
                    }}
                />
                <IconButton
                    icon={<ArrowRight />}
                    onClick={() => {
                        const index = (active + 1) < totalPages ? (active + 1) : 0
                        setActive(index)
                    }}
                />
                { totalPages >= 10 && 
                    <IconButton
                        icon={<ArrowEnd />}
                        onClick={() => {
                            setActive(totalPages - 1)
                        }}
                    />
                }
            </Box>
        </Flex>
    )
}

export default Pagination