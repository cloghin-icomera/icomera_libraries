import React from 'react';
import { ThemeProvider, useThemeUI, get, merge } from 'theme-ui';

const theme = {
	colors: {
		modes: {
			light: {
				brand: 'blue' 
			},
			dark: {
				brand: 'yellow'
			}
		}
	}
};

export const MyThemeContext = React.createContext({theme, mode: 'light'});

const applyColorMode = (theme, mode) => {
	if (!mode) return theme
	const modes = get(theme, 'colors.modes', {})
	return merge.all({}, theme, {
		colors: get(modes, mode, {}),
	})
}

export const ColorModeProvider = ({mode, children}) => {
	const { theme } = useThemeUI()
	const new_theme = applyColorMode(theme, mode)
	return (
		<ThemeProvider theme={new_theme}>
			{children}
		</ThemeProvider>
	)
}

export const MyThemeProvider = ({ theme, mode = 'light', children }) => (
	<MyThemeContext.Provider value={{theme, mode}}>
		{children}
	</MyThemeContext.Provider>
)

