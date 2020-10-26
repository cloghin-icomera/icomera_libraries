import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '../../atoms'

const Table = ({children, width = '100%', ...rest}) =>
    <Box
        as='table'
        sx={{ width: width }}
        {...rest}
        __css={{
            borderSpacing: 0,
            borderCollapse: 'collapse'
        }}
    >
        {children}
    </Box>

Table.propTypes = {
    title: PropTypes.string,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

export default Table