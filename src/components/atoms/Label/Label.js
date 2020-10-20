import React from 'react';
import Box from '../Box/Box';

export default React.forwardRef((props, ref) => (
    <Box
        ref={ref}
        as="label"
        variant="label"
        {...props}
        __themeKey="forms"
        __css={{
            display: 'flex',
        }}
    />
))