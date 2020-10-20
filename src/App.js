import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import Home from './domains/Home';
import Buttons from './domains/Buttons';
import Test from './domains/Test';
import Tables from './domains/Tables';
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
					<Route exact path='/test'>
						<Test />
					</Route>
					<Route exact path='/tables'>
						<Tables />
					</Route>
				</Switch>
			</Router>
			</ThemeProvider>
		</div>
	);
}
	
export default App;
	