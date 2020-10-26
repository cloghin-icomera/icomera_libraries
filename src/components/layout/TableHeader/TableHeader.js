import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from '../../atoms'

const TableHeader = ({children, ...rest}) =>
    <Box
        as='thead'
        {...rest}
        __css={{
            '& tr' : {
                borderBottomColor: 'border',
            }
        }}
    >
        {children}
    </Box>

export default TableHeader