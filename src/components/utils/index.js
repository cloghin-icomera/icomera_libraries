import React from 'react';
import { ThemeProvider, useThemeUI, get, merge } from 'theme-ui';

const applyColorMode = (theme, mode) => {
	if (!mode) return theme
	const modes = get(theme, 'colors.modes', {})
	return merge.all({}, theme, {
		colors: get(modes, mode, {}),
	})
}

export const ColorModeProvider = ({mode, children}) => {
	const { theme } = useThemeUI();
	const new_theme = applyColorMode(theme, mode)
	return (
		<ThemeProvider theme={new_theme}>
			<ColorContext.Provider value={mode}>
				{children}
			</ColorContext.Provider>
		</ThemeProvider>
	)
}

export const ColorContext = React.createContext('default')