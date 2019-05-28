import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Routes from './Routes';
import Layout from './components/Layout';

import './styles/index.scss';

const Temporary = () => {
	const handleClick = () => {
		axios.post('/logout');
	};

	return (
		<button onClick={handleClick}>Log out</button>
	);
};

ReactDOM.render(
	<Layout>
		<Temporary />
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</Layout>,
	document.getElementById('root')
);

if (process.env.NODE_ENV === 'development') {
	module.hot.accept();
}