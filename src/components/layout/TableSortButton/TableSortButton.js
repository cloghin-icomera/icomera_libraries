import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from '../../atoms'
import { ArrowDown, ArrowUp } from '../../../icons/icomera/outline'

const TableSortButton = React.forwardRef(
({
    label,
    sortOrder,
    onSort,
    ...rest
}, ref ) =>
    <Box
        as='button'
        ref={ref}
        onClick={onSort}
        {...rest}
        __css={{
            appearance: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            border: 0,
            padding: 0,
            outline: 'none',
            fontFamily: 'inherit',
            bg: 'transparent'
        }}
    >
        <Text variant='tableHeader' color={ sortOrder ? 'text' : undefined}>{label}</Text>
        <Box sx={{ width: '19px', height: '19px' }}>
            { sortOrder === 'asc' && <ArrowUp stroke='text' size={19} /> }
            { sortOrder === 'desc' && <ArrowDown stroke='text' size={19} /> }
        </Box> 
    </Box>
)

TableSortButton.propTypes = {
    label: PropTypes.string.isRequired,
    sortOrder: PropTypes.string,
    onSort: PropTypes.func.isRequired,
    refProp: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ])
}

export default TableSortButton