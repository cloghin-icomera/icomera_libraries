import React, { useContext } from 'react';
import { MyThemeProvider, MyThemeContext } from '../components/utils';
import { Flex } from '../components/atoms';

const sxFlex = {
    flex: '1 1 50%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column'
}

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

const Test = () => {
    const { theme, mode } = useContext(MyThemeContext);
    const typeColor = theme.colors.modes[mode].brand;
    return (
        <React.Fragment>
            <p style={{ color: typeColor}}>Test</p>
        </React.Fragment>
    )
};

export default () => (
    <Flex sx={{ minHeight: '100%' }}>
        <MyThemeProvider theme={ theme } mode='dark'>
            <Flex bg='background' sx={ sxFlex }>
                <Test />
            </Flex>
        </MyThemeProvider>
        <MyThemeProvider theme={ theme }>
            <Flex sx={ sxFlex }>
                <Test />
            </Flex>
        </MyThemeProvider>
    </Flex>
)