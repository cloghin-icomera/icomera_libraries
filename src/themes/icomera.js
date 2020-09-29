const alerts = {
	primary: {
		color: 'background',
		bg: 'primary',
		fontSize: 1,
	},
	secondary: {
		color: 'background',
		bg: 'secondary',
	},
	muted: {
		color: 'text',
		bg: 'muted',
	},
	error: {
		color: 'background',
			bg: 'error',
			fontSize: 1,
	},
	error_outline: {
		fontSize: 1,
		color: 'error',
		bg: 'background',
		borderColor: 'error',
		borderWidth: 'thin',
		borderStyle: 'primary'
	}
}

const colors = {
	primary: '#009de9',
	secondary: '#6e707a',
	muted: '#a4afb7',
	card: '#ffffff',
	text: '#000000',
	background: '#f0f0ff',
	border: '#dfdfe6',
	error: '#e10019',
	warning: '#ffbf00',
	success: '#19d400',
	modes : {
		dark: {
			text: '#ffffff',
			card: '#171D3F',
			background: '#11162e',
			border: '#18345f'
		}
	}
}


export default {
	space: [0, 4, 8, 16, 24, 32, 48, 64, 72],
	sizes: {
		container: '75%'
	},
	fonts: {
        body: '"Lato", system-ui, sans-serif',
        heading: 'inherit',
        monospace: 'Menlo, monospace',
    },
	fontSizes: [12, 14, 16, 20, 24, 28, 32, 48, 64],
	fontWeights: {
		body: 400,
		heading: 700,
		bold: 700,
	},
	text: {
		default: {
			color: 'text',
		},
		caps: {
			textTransform: 'uppercase',
			letterSpacing: '0.2em',
		},
		heading: {
			fontFamily: 'heading',
			fontWeight: 'heading',
			lineHeight: 'heading',
		},
	},
	lineHeights: {
		body: 1.5,
		heading: 1.125,
	},
	colors,
	buttons: {
		primary: {
			color: 'card',
            bg: 'primary',
            fontWeight: 'button',
			fontFamily: 'body',
			':hover' : {
				bg: 'text'
			}
		},
		secondary: {
			bg: 'secondary',
		},
		outline: {
			color: 'primary',
			bg: 'transparent',
            boxShadow: 'inset 0 0 0 1px',
            fontWeight: 'button',
            fontFamily: 'body',
		},
		icon: {
			borderColor: 'border'
		},
		close: {
			
		}
	},
	icons: {
		primary: {
			fill: 'none',
			stroke: 'primary',
			strokeWidth : '2',
			strokeLinecap : 'round'
		},
        light: {
            fill: 'none',
			stroke: 'card',
			strokeWidth : '2',
			strokeLinecap : 'round'
		},
		error: {
			fill: 'error',
		}
	},
	cards: {
		primary: {
			padding: 2,
			borderRadius: 8,
			boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
			backgroundColor: 'card'
		},
		compact: {
			padding: 1,
			borderRadius: 2,
			border: '1px solid',
			borderColor: 'border',
		},
	},
	forms : {
		label: {
			color: 'primary',
			fontWeight: 'bold'
		},
		checkbox: {
			color: 'primary'
		},
		radio: {
			color: 'primary'
		},
		input: {
			borderColor: 'border'
		},
		select : {
			borderColor: 'border'
		},
		slider: {
			color: 'primary'
		},
		textarea: {
			backgroundColor: 'card',
			borderColor: 'border'
		}
	},
	borders : {

	},
	borderWidths: {
		thin: '1px'
	},
	borderStyles: {
		primary: 'solid'
	},
	links: {
		nav: {
			px: 2,
			py: 1,
			textTransform: 'uppercase',
			letterSpacing: '0.2em',
		}
	},
	alerts,
	messages: {
		color: 'text',
		bg: 'card'
	},
	images: {
		avatar: {
			width: 48,
			height: 48,
			borderRadius: 99999,
		},
	},
	badges: {
		primary: {
			color: 'background',
			bg: 'primary',
		},
		outline: {
			color: 'primary',
			bg: 'transparent',
			boxShadow: 'inset 0 0 0 1px',
		},
		circle: {
			borderRadius: 99999
		}
	},
	layout : {
		container: {
			
		}
	},
	styles: {
		root: {
			fontFamily: 'body',
			lineHeight: 'body',
			fontWeight: 'body',
		},
		h1: {
			color: 'text',
			fontFamily: 'heading',
			lineHeight: 'heading',
			fontWeight: 'heading',
			fontSize: 5,
		},
		h2: {
			color: 'text',
			fontFamily: 'heading',
			lineHeight: 'heading',
			fontWeight: 'heading',
			fontSize: 4,
		},
		h3: {
			color: 'text',
			fontFamily: 'heading',
			lineHeight: 'heading',
			fontWeight: 'heading',
			fontSize: 3,
		},
		h4: {
			color: 'text',
			fontFamily: 'heading',
			lineHeight: 'heading',
			fontWeight: 'heading',
			fontSize: 2,
		},
		h5: {
			color: 'text',
			fontFamily: 'heading',
			lineHeight: 'heading',
			fontWeight: 'heading',
			fontSize: 1,
		},
		h6: {
			color: 'text',
			fontFamily: 'heading',
			lineHeight: 'heading',
			fontWeight: 'heading',
			fontSize: 0,
		},
		p: {
			color: 'text',
			fontFamily: 'body',
			fontWeight: 'body',
			lineHeight: 'body',
		},
		a: {
			color: 'primary',
		},
		img: {
			maxWidth: '100%',
		},
		hr: {
			borderTopWidth: '1px',
			borderTopStyle: 'solid',
			borderTopColor: 'border'
		}
	},
}