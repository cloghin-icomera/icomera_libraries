import React from 'react'
import PropTypes from 'prop-types'
import { Flex, IconButton, Label, Select, Text } from '../../atoms'
import { ArrowEnd, ArrowLeft, ArrowRight, ArrowStart } from '../../../icons/icomera/outline'

const TablePagination = ({
    count,
    page,
    rowsPerPage = 10,
    rowsPerPageOptions = [5, 10, 25],
    onChangePage,
    onChangeRowsPerPage = undefined
}) =>
    <Flex>
        <Flex
            sx={{ alignItems: 'center' }}
        >
            <Label htmlFor='perPage' mr={2}>Rows per page:</Label>
            <Select
                value={rowsPerPage}
                id='perPage'
                onChange={onChangeRowsPerPage}
            >
                {rowsPerPageOptions.map( value => 
                    <option key={value}>{value}</option>
                )}
            </Select>
        </Flex>
        <Flex
            ml={6}
            sx={{ alignItems: 'center' }}
        >
            <Text mr={3}>
                {page * rowsPerPage + 1}
                –
                {(page + 1) * rowsPerPage  > count
                    ? count
                    : rowsPerPage * (page + 1)
                }
                &nbsp;of {count}
            </Text>
            {  count / rowsPerPage >= 10 &&
                <IconButton
                    icon={<ArrowStart />}
                    onClick={() => onChangePage(0)}
                    disabled={page === 0}
                    hoverIndicator 
                />
            }
            <IconButton
                icon={<ArrowLeft />}
                onClick={() => onChangePage(page - 1)}
                disabled={page === 0}
                hoverIndicator 
            />
            <IconButton
                icon={<ArrowRight />}
                onClick={() => onChangePage(page + 1)}
                disabled={(page + 1) * rowsPerPage >= count}
                hoverIndicator
            />
            {  count / rowsPerPage >= 10 &&
                <IconButton
                    icon={<ArrowEnd />}
                    onClick={() => onChangePage(Math.floor(count / rowsPerPage - 1))}
                    disabled={(page + 1) * rowsPerPage >= count}
                    hoverIndicator
                />
            }
        </Flex>
    </Flex>

TablePagination.propTypes = {
    count: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number,
    rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
    onChangePage: PropTypes.func.isRequired,
    onChangeRowsPerPage: PropTypes.func
}

export default TablePagination