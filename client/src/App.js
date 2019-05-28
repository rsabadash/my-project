import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const App = () => {
	return (
		<Fragment>
			<Link to="/register">Register</Link>
			<Link to="/login">Log in</Link>
		</Fragment>
	)
};

export default App;