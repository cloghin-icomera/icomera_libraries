import { lighten, darken, alpha } from '@theme-ui/color';

const getHoverColor = (t, color) => {
    if (t.colors.modeID === 'dark') {
        // dark color mode
        return lighten(color, 0.2)
    } else {
        // default color mode
        return darken(color, 0.2)
    }
}

export const getColors = (variant, color) => {
	if (color) {
		switch(variant) {
			case 'default':
				return {
					color: color,
					fill: color,
					stroke: color,
					'&:not(.active):hover' : {
						bg: alpha(color, 0.1),
						color: t => getHoverColor(t, color),
						fill: t => getHoverColor(t, color),
						stroke: t => getHoverColor(t, color),
					}
				}
			case 'primary':
				return {
					bg: color,
					'&:not(.active):hover' : {
						bg: t => getHoverColor(t, color)
					}
				}
			case 'outlined':
				return {
					color: color,
					fill: color,
					stroke: color,
					'&:not(.active):hover' : {
						bg: alpha(color, 0.1),
						color: t => getHoverColor(t, color),
						fill: t => getHoverColor(t, color),
						stroke: t => getHoverColor(t, color), 
					}
				}
			default:
				return
		}
	} else {
		return
	}
}