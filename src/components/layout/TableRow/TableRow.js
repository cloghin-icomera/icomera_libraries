import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '../../atoms' 
import { alpha } from '@theme-ui/color'

const TableRow = ({children, ...rest}) =>
    <Box 
        as='tr'
        {...rest}
        __css={{
            borderBottomColor: alpha('border', 0.5),
            borderBottomWidth: 'thin',
            borderBottomStyle: 'solid'
        }}
    >
        {children}
    </Box>

export default TableRow