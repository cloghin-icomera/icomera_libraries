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

const sortData = (data, sorting) => {
    let field, order
    for ( const [key, value] of Object.entries(sorting) ) {
        field = key
        order = value
    }
        
    return (
        [...data].sort(
            (a, b) => {
                if (a[field] < b[field]) {
                    return order === 'asc' ? -1 : 1;
                }
                if (a[field] > b[field]) {
                    return order === 'asc' ? 1 : -1;
                }
                return 0;
            }
        )
    )
}

const filterData = (data, searching) => {
    return (
        data.filter( datum => {
            let match = true
            for ( const prop in searching) {
                const source = datum[prop].toString().toLowerCase()
                const target = searching[prop].value.toLowerCase()
                if (!source.includes(target)) {
                    match = false
                }
                
            }
            return match
        }
    ))
}

export const sortAndFilterData = (data, searching, sorting) => {
    return sortData(
        filterData(data, searching),
        sorting
    )
}