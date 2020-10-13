import React, { useContext } from 'react';
import { lighten, darken, alpha } from '@theme-ui/color';
import Box from '../Box/Box';
import { ColorContext } from '../../utils';
import { useColorMode } from 'theme-ui';

const getColors = (variant, color, activeMode) => {
	if (color) {
		switch(variant) {
			case 'default':
				return {
					color: color,
					fill: color,
					stroke: color,
					'&:not(.active):hover' : {
						bg: alpha(color, 0.1),
						color: (activeMode === 'dark') ? lighten(color, 0.2) : darken(color, 0.15),
						fill: (activeMode === 'dark') ? lighten(color, 0.2) : darken(color, 0.15),
						stroke: (activeMode === 'dark') ? lighten(color, 0.2) : darken(color, 0.15),
					}
				}
			case 'primary':
				return {
					bg: color,
					'&:not(.active):hover' : {
						bg: (activeMode === 'dark') ? lighten(color, 0.2) : darken(color, 0.15)
					}
				}
			case 'outlined':
				return {
					color: color,
					fill: color,
					stroke: color,
					'&:not(.active):hover' : {
						bg: alpha(color, 0.1),
						color: (activeMode === 'dark') ? lighten(color, 0.2) : darken(color, 0.15),
						fill: (activeMode === 'dark') ? lighten(color, 0.2) : darken(color, 0.15),
						stroke: (activeMode === 'dark') ? lighten(color, 0.2) : darken(color, 0.15), 
					}
				}
			default:
				return
		}
	} else {
		return
	}
}

const getSizes = size => {
	switch (size) {
	case 'small': 
		return {
			button: {
				px: 2,
				py: 1,
				fontSize: 0
			},
			icon: {
				label: {
					mr: 1,
					ml: -1,
					size: 19
				},
				default: {
					mr: -1,
					ml: -1,
					size: 19
				}
			}
		}
	case 'medium':
		return {
			button: {
				px: 3,
				py: 2,
			},
			icon: {
				label: {
					mr: 2,
					ml: -1
				},
				default: {
					mr: -1,
					ml: -1
				}
			}
		}
	case 'large': 
		return {
			button: {
				px: 4,
				py: 3,
				fontSize: 3
			},
			icon: {
				label: {
					mr: 2,
					ml: -1,
					size: 28
				},
				default: {
					mr: -1,
					ml: -1,
					size: 28
				}
			}
		}
	default:
		return
	}
}

const getClassName = (active, rounded, disabled) => {
	let className = '';
	className = active ? 'active' : disabled ? 'disabled' : '';
	className += rounded ? ' rounded' : '';
	return className;
}

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
	
	const [ colorMode ] = useColorMode();
	const localMode = useContext(ColorContext);
   	let activeMode = localMode;

   	if (colorMode !== 'default' && localMode === 'default') {
		activeMode = colorMode
	}
    
    const className = getClassName(active, rounded, disabled);
	const sxColor = getColors(variant, color, activeMode);
	const sxSize = getSizes(size);

	if (icon && label) {
        icon = React.cloneElement( icon, sxSize.icon.label );
	} else if( icon ) {
		icon = React.cloneElement( icon, sxSize.icon.default );
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

export default Button