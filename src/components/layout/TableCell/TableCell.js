import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '../../atoms'

const TableCell = ({align, children, ...rest}) =>
    <Box
        as='td'
        {...rest}
        __css={{
            padding: 3,
            textAlign: align
        }}
    >
        {children}
    </Box>

TableCell.propTypes = {
    align: PropTypes.string
}

export default TableCell