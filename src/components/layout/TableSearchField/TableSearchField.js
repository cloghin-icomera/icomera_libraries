import React from 'react'
import PropTypes from 'prop-types'
import { Flex, IconButton, Input } from '../../atoms'
import { Remove, Search } from '../../../icons/icomera/outline'

const TableSearchField = React.forwardRef(
({
    active,
    name,
    onSearch,
    onToggle,
    onBlur,
    value,
    ...rest
}, ref ) =>
    <Flex
        ml={2}
        sx={{ justifyContent: 'flex-end' }}
        {...rest}
    >
        { active &&
            <Input
                ref={ref}
                name={name}
                value={value}
                size='small'
                onChange={onSearch}
                onBlur={onBlur}
            />
        }
        <Flex sx={{ flex: '0 0 29px', alignItems: 'center', justifyContent: 'flex-end' }}>
            <IconButton
                icon={ !active ? <Search /> : <Remove />} 
                size='small' 
                onClick={onToggle}
                hoverIndicator 
            />
        </Flex>
    </Flex>
)

TableSearchField.propTypes = {
    active: PropTypes.bool,
    name: PropTypes.string,
    onSearch: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    value: PropTypes.string
}

export default TableSearchField