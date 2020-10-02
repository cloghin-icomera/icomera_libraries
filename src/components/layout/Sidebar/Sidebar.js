import React from 'react';
import { Box } from '../../atoms/Box/Box';

export default React.forwardRef((props, ref) => (
    <Box ref={ref} variant="sidebar" {...props} __themeKey="layout"/>	
))