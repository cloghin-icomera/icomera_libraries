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