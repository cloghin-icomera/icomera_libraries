import React from 'react';
import { lighten, darken, alpha } from '@theme-ui/color';
import Box from '../Box/Box';
import Flex from '../Flex/Flex';

const getClassName = (active, rounded, disabled, hoverIndicator) => {
	let className = '';
	className = active ? 'active' : disabled ? 'disabled' : '';
    className += rounded ? ' rounded' : '';
    className += hoverIndicator ? 'hover-back' : '';
	return className;
}

const getHoverColor = (t, color) => {
    if (t.colors.modeID === 'dark') {
        // dark color mode
        return lighten(color, 0.2)
    } else {
        // default color mode
        return darken(color, 0.2)
    }
}

const getColors = (variant, color) => {
	if (color) {
		switch(variant) {
			case 'icon':
				return {
					fill: color,
					stroke: color,
					'&:not(.active):hover' : {
                        fill: t => getHoverColor(t, color),
                        stroke: t => getHoverColor(t, color)
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
            sxPos = { bottom: '48px' }
            break;
        case 'left':
            sxPos = { right: '48px' }
            break;
        case 'right':
            sxPos = { left: '48px' }
            break;
        default:
            sxPos = { top: '48px' }
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
                    width: 'max-content',
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
                    pointerEvents: 'none',
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

    const className = getClassName(active, rounded, disabled, hoverIndicator);
    const sxColor = getColors(variant, color);
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