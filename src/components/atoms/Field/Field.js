import React from 'react';
import Box from '../Box/Box';
import Label from '../Label/Label';
import Input from '../Input/Input';

/* utils */
const getProps = test => props => {
    const next = {}
    for (const key in props) {
        if (test(key || '')) next[key] = props[key]
    }
    return next
}
  
const MRE = /^m[trblxy]?$/

const getMargin = getProps(k => MRE.test(k))
const omitMargin = getProps(k => !MRE.test(k))
/* utils */

export default React.forwardRef(
  ({ as: Control = Input, label, name, ...props }, ref) => {
    return (
      <Box {...getMargin(props)}>
        <Label htmlFor={name}>{label}</Label>
        <Control ref={ref} id={name} name={name} {...omitMargin(props)} />
      </Box>
    )
  }
)