import React from 'react'
import { Box } from '../../atoms' 
import { alpha } from '@theme-ui/color'

const TableRow = ({selected, children, ...rest}) =>
    <Box 
        as='tr'
        className={ selected ? 'selected' : undefined }
        {...rest}
        variant='row'
        __themeKey='tables'
        __css={{
            borderBottomColor: alpha('border', 0.5),
            borderBottomWidth: 'thin',
            borderBottomStyle: 'solid'
        }}
    >
        {children}
    </Box>

export default TableRow