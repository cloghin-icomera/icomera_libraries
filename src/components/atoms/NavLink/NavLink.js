import React from 'react'
import Link from '../Link/Link'

export default React.forwardRef((props, ref) => (
    <Link
        ref={ref}
        variant="nav"
        {...props}
        __css={{
            color: 'inherit',
            textDecoration: 'none',
            display: 'inline-block',
            '&:hover, &:focus, &.active': {
                color: 'primary',
            },
        }}
    />
))