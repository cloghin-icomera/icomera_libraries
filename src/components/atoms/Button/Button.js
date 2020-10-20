import React from 'react';
import PropTypes from 'prop-types'
import Box from '../Box/Box';
import { getSizes } from './sizes'
import { getClassName } from './classes'
import { getColors } from './colors'

const Button = React.forwardRef(
({
    icon,
    label,
    color,
	variant = 'default',
	size = 'medium',
    active = false,
    rounded = false,
	disabled = false,
	wrapper,
    ...props
},
    ref
) => {
	
    const className = getClassName(active, rounded, disabled);
	const sxColor = getColors(variant, color);
	const sxSize = getSizes(size);

	if (React.isValidElement(icon)) {
		icon = label ?
			React.cloneElement( icon, sxSize.icon.label ) :
			React.cloneElement( icon, sxSize.icon.default )
	}
	
	const buttonJSX = 
		<Box
			ref={ref}
			as='button'
			className={ className }
			variant={ variant }
			{...props}
			__themeKey='buttons'
			__css={{
				appearance: 'none',
				display: 'inline-flex',
				alignItems: 'center',
				textAlign: 'center',
				lineHeight: 'inherit',
				textDecoration: 'none',
				border: 0,
			}}
			sx={{
				...sxColor,
				...sxSize.button
			}}
		>	
			{icon}
			{label}
		</Box>

	if( wrapper ) {
		return React.cloneElement( wrapper, { children: buttonJSX } );
	} else {
		return buttonJSX
	}
})

Button.propTypes = {
	icon: PropTypes.element
}

export default Button