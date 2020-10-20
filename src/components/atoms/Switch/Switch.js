import React from 'react'
import Box from '../Box/Box'
import Flex from '../Flex/Flex'


export default React.forwardRef(
    ({checked, onChange, label, ...rest}, ref) => (
    <Flex
        as='label'
        variant='label'
        {...rest}
        __themeKey='forms'
    >
        <Box
            ref={ref}
            as="input"
            type="checkbox"
            {...rest}
            sx={{
                position: 'absolute',
                opacity: 0,
                zIndex: -1,
                width: 1,
                height: 1,
                overflow: 'hidden',
            }}
        />
        <Flex
            variant='switch'
            __themeKey="forms"
            __css={{
                'input:checked ~ &': {
                    bg: 'brand'
                },
                'input:checked ~ & > .handle' : {
                    ml: '16px',
                    bg: 'card'
                },
            }}
        >  
            <Box className='handle' />
        </Flex>
        {label &&
            <Box as='span' ml={2}>{label}</Box>
        }
    </Flex>
))