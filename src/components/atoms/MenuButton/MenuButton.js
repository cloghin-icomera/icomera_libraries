import React from 'react'
import Box from '../Box/Box'
import IconButton from '../IconButton/IconButton'

const getSize = size => {
    switch(size) {
        case 'small':
            return 19
        case 'large':
            return 28
        default:
            return 24
    }
}

const MenuIcon = ({ size, ...props }) => (
    <Box
        css={{
            width : `${size}px`,
            height : `${size}px`
        }}
        {...props}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <g fill="none" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </g>
        </svg>
    </Box>
)

export default React.forwardRef(({icon, ...props}, ref) => {
    icon = icon ? icon : <MenuIcon size={getSize(props.size)} />;
    return (
    <IconButton
        ref={ref}
        icon={icon}
        {...props}
    />
    )
})