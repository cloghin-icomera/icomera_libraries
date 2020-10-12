import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import Home from './domains/Home';
import Buttons from './domains/Buttons';
import icomera from './themes/icomera';

import './App.css';

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={icomera}>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/buttons'>
						<Buttons />
					</Route>
				</Switch>
			</Router>
			</ThemeProvider>
		</div>
	);
}
	
export default App;
	