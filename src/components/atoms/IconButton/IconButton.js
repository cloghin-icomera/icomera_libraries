import React, { useContext } from 'react';
import { lighten, darken, alpha } from '@theme-ui/color';
import Box from '../Box/Box';
import Flex from '../Flex/Flex';
import { ColorContext } from '../../utils';
import { useColorMode } from 'theme-ui';

const getClassName = (active, rounded, disabled, hoverIndicator) => {
	let className = '';
	className = active ? 'active' : disabled ? 'disabled' : '';
    className += rounded ? ' rounded' : '';
    className += hoverIndicator ? 'hover-back' : '';
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
                        fill: (activeMode === 'dark') ? lighten(color, 0.2) : darken(color, 0.15),
                        stroke: (activeMode === 'dark') ? lighten(color, 0.2) : darken(color, 0.15)
                    },
                    '&.hover-back:hover' : {
                        bg: alpha(color, 0.15),
                    }
				}
			case 'action':
				return {
                    fill: color,
					stroke: color,
					'&:not(.active):hover' : {
						bg: color
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
				p: 1
			},
			icon: {
				size: 19
			}
		}
	case 'medium':
		return {
			button: {
				p: 2
			},
			icon: {
				m: 0
			}
		}
	case 'large': 
		return {
			button: {
				p: 3,
			},
			icon: {
                size: 28
			}
		}
	default:
		return
	}
}

const Tooltip = ({ label, position = 'bottom', children }) => {
    let sxPos = {};
    switch(position) {
        case 'top':
            sxPos = { bottom: '120%' }
            break;
        case 'left':
            sxPos = { right: '120%' }
            break;
        case 'right':
            sxPos = { left: '120%' }
            break;
        default:
            sxPos = { top: '120%' }
    }
    return (
        <Flex sx={{
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover .label' : {
                opacity: '100%',
                visibility: 'visible',
                transitionDelay: '.2s',
            }
        }}>
            {children}
            <Box
                className='label'
                as='span'
                sx={{
                    opacity: 0,
                    transition: 'all .25s ease-in-out',
                    visibility: 'hidden',
                    bg: alpha('text', 0.85),
                    color: 'card',
                    textAlign: 'center',
                    py: 1,
                    px: 2,
                    fontSize: 0,
                    borderRadius: 'small',
                    position: 'absolute',
                    zIndex: '1',
                    ...sxPos
                }}
            >
                {label}
            </Box>
        </Flex>
    )
}

const IconButton = React.forwardRef(
({
    active = false,
    rounded = false,
    disabled = false,
    hoverIndicator = false,
    icon,
    color,
    size = 'medium',
    variant = 'icon',
    wrapper,
    label = undefined,
    labelPosition = undefined,
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

    const className = getClassName(active, rounded, disabled, hoverIndicator);
    const sxColor = getColors(variant, color, activeMode);
    const sxSize = getSizes(size);

    icon = React.cloneElement( icon, sxSize.icon );

    const buttonJSX =
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
                color: 'inherit',
                bg: 'transparent',
                border: 'none',
                borderRadius: 4,
            }}
            sx={{
                ...sxColor,
                ...sxSize.button
			}}
        >
            {icon}
        </Box>

    if( wrapper ) {
		return React.cloneElement( wrapper, { children: buttonJSX } );
	} else {
        if (label) {
            return <Tooltip label={label} position={labelPosition}>{ buttonJSX }</Tooltip>
        } else {
            return buttonJSX
        }
		
	}
})

export default IconButton