import React, { useContext } from 'react';
import { lighten, darken, alpha } from '@theme-ui/color';
import Box from '../Box/Box';
import { ColorContext } from '../../utils';
import { useColorMode } from 'theme-ui';

const getClassName = (active, rounded, disabled) => {
	let className = '';
	className = active ? 'active' : disabled ? 'disabled' : '';
	className += rounded ? ' rounded' : '';
	return className;
}

const getColors = (variant, color, activeMode) => {
	if (color) {
		switch(variant) {
			case 'icon':
				return {
					fill: color,
					stroke: color,
					'&:not(.active):hover' : {
						bg: alpha(color, 0.1)
					}
				}
			case 'active':
				return {
                    bg: color,
                    fill: color,
					stroke: color,
					'&:not(.active):hover' : {
						bg: (activeMode === 'dark') ? lighten(color, 0.2) : darken(color, 0.15)
					}
				}
			default:
				return
		}
	} else {
		return
	}
}

const NewIconButton = React.forwardRef(
({
    active = false,
    rounded = false,
    disabled = false,
    icon,
    color,
    size = 24,
    variant = 'icon',
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

    if (color) {
        icon = React.cloneElement(icon, { fill: color, stroke: color })
    }

    return (
        <Box
            ref={ref}
            as="button"
            variant={variant}
            className={className}
            {...props}
            __themeKey="buttons"
            __css={{
                appearance: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 2,
                color: 'inherit',
                bg: 'transparent',
                border: 'none',
                borderRadius: 4,
            }}
            sx={{
				...sxColor,
			}}
        >
            {icon}
        </Box>
    )
})

export default NewIconButton