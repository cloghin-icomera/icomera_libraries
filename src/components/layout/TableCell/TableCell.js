import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '../../atoms'

const TableCell = ({children, ...rest}) =>
    <Box
        as='td'
        {...rest}
        __css={{
            padding: 3
        }}
    >
        {children}
    </Box>

export default TableCell