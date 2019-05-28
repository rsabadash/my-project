import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App';
import Register from './components/Register';
import LogIn from './components/LogIn';

export default () => {
	return (
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/register" component={Register} />
			<Route path="/login" component={LogIn} />
		</Switch>
	);
};