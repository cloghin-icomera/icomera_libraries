import React from 'react';
import Box from '../Box/Box';

export default React.forwardRef((props, ref) => (
    <Box
        ref={ref}
        as="input"
        variant="input"
        {...props}
        __themeKey="forms"
        __css={{
            display: 'block',
            width: '100%',
            p: 2,
            appearance: 'none',
            fontSize: 'inherit',
            lineHeight: 'inherit',
            border: '1px solid',
            borderRadius: 4,
            color: 'inherit',
            bg: 'transparent',
        }}
    />
))