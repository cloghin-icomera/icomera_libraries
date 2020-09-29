import React from 'react';
import Box from '../Box/Box';

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

const SVG = ({ size = 24, ...props }) => (
    <Box
        as="svg"
        xmlns="http://www.w3.org/2000/svg"
        width={size + ''}
        height={size + ''}
        viewBox="0 0 24 24"
        fill="currentcolor"
        {...props}
    />
)

const DownArrow = props => (
    <SVG {...props}>
        <path d="M7 10l5 5 5-5z" />
    </SVG>
)

export default React.forwardRef((props, ref) => (
    <Box
        {...getMargin(props)}
        sx={{
            display: 'flex',
        }}
    >
        <Box
            ref={ref}
            as="select"
            variant="select"
            {...omitMargin(props)}
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
        <DownArrow
            sx={{
                ml: -28,
                alignSelf: 'center',
                pointerEvents: 'none',
            }}
        />
    </Box>
))