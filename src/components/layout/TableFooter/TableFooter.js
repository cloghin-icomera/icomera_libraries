import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '../../atoms'

const TableFooter = ({children, ...rest}) =>
    <Box
        as='tfoot'
        {...rest}
        __css={{
            borderTopColor: 'border',
            borderTopWidth: 'thin',
            borderTopStyle: 'solid',
            '& tr' : {
                borderBottom: 'none'
            }
            
        }}
    >
        {children}
    </Box>

export default TableFooter