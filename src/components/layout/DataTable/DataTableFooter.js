import React from 'react'
import { Flex } from '../../atoms'

export default ({ children, ...props }) => (
    <Flex
        sx={{
            boxShadow: theme => `0 -1px ${theme.colors.border}`,
            px: 2,
            py: 4
        }}
        {...props}
    >
        {children}
    </Flex>
)