import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Routes from './Routes';
import Layout from './components/Layout';

import './styles/index.scss';

ReactDOM.render(
	<Layout>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</Layout>,
	document.getElementById('root')
);

if (process.env.NODE_ENV === 'development') {
	module.hot.accept();
}