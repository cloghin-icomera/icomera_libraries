import React from 'react'
import Box from '../Box/Box';

export default React.forwardRef((props, ref) => {
    return (
        <Box
            ref={ref}
            variant="container"
            {...props}
            __themeKey="layout"
            __css={{
                width: '100%',
                maxWidth: 'container',
                mx: 'auto',
            }}
        />
    )
})