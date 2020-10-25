import React from 'react';
import Box from '../Box/Box';

export default React.forwardRef(({size, ...rest}, ref) => {

    return (
        <Box
            ref={ref}
            as="input"
            variant="input"
            className={size ? size : ''}
            {...rest}
            __themeKey="forms"
            __css={{
                display: 'block',
                width: '100%',
                appearance: 'none',
            }}
        />
    )
})