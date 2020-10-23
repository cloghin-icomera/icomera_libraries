import React from 'react';
import PropTypes from 'prop-types'
import Box from '../Box/Box';
import Tooltip from '../Tooltip/Tooltip';
import { getClassName } from './classes'
import { getColors } from './colors'
import { getSizes } from './sizes'

const IconButton = React.forwardRef(
({
    active = false,
    as = 'button',
    color = null,
    disabled = false,
    hoverIndicator = false,
    href = undefined, 
    icon = undefined,
    label = undefined,
    labelPosition = undefined,
    onClick = undefined,
    rounded = false,
    size = 'medium',
    variant = 'icon',
    wrapper = undefined,
    ...rest
},
    ref
) => {

    const className = getClassName(active, rounded, disabled, href, onClick, hoverIndicator);
    const sxColor = getColors(variant, color);
    const sxSize = getSizes(size);

    icon = React.cloneElement( icon, sxSize.icon );
    
    if ( href && !onClick) {
		as = 'a'
	}

    const buttonJSX =
        <Box
            ref={ref}
            as={as}
            href={href ? href : undefined}
			onClick={onClick ? onClick : undefined}
            variant={variant}
            className={className}
            {...rest}
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

IconButton.propTypes = {
    active: PropTypes.bool,
	as: PropTypes.oneOf(['button', 'a']),
	color: PropTypes.string,
    disabled: PropTypes.bool,
    hoverIndicator: PropTypes.bool,
	href: PropTypes.string,
	icon: PropTypes.element.isRequired,
	label: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
    ]),
    labelPosition: PropTypes.oneOf([
        'top', 'right', 'bottom', 'left'
    ]),
	onClick: PropTypes.func,
	ref: PropTypes.oneOfType([
		PropTypes.func, 
		PropTypes.shape({ current: PropTypes.any })
	]),
	rounded: PropTypes.bool,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	variant: PropTypes.oneOf(['icon', 'action']),
	wrapper: PropTypes.element
}

export default IconButton