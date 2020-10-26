import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '../../atoms'

const TableBody = ({ children, ...rest }) =>
    <Box
        as='tbody'
        {...rest}
        __css={{
            '& tr:last-child' : {
                border: 'none'
            }
        }}
    >
        {children}
    </Box>

export default TableBody