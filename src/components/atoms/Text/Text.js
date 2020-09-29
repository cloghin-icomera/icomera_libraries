import React from 'react'
import Box from '../Box/Box'

export default React.forwardRef((props, ref) => (
    <Box ref={ref} variant="default" {...props} __themeKey="text" />
))