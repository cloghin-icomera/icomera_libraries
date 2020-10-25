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

const X = ({size, ...rest}) => (
    <Box
        css={{
            width : `${size}px`,
            height : `${size}px`
        }}
        {...rest}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <g fill="none" strokeLinecap="round" strokeWidth="2">
                <line x1="19" y1="5" x2="5" y2="19"></line>
                <line x1="5" y1="5" x2="19" y2="19"></line>
            </g>
        </svg>
    </Box>
)

export default React.forwardRef(({ icon, size, ...rest }, ref) => {
    icon = icon ? icon : <X size={getSize(size)} />;
    return (
        <IconButton
            ref={ref}
            icon={icon}
            size={size}
            {...rest}
        />
    )
})