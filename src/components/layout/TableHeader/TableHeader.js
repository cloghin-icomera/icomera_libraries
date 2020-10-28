import React from 'react'
import { Box } from '../../atoms'

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