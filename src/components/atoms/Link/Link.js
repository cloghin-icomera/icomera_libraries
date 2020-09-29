import React from 'react'
import Box from '../Box/Box'

export default React.forwardRef((props, ref) => (
    <Box ref={ref} as="a" variant="styles.a" {...props} __themeKey="links" />
))