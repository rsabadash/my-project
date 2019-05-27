import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App';
import Register from './components/Register';

export default () => {
	return (
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/register" component={Register} />
		</Switch>
	);
};