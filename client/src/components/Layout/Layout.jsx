import React from 'react';
import PropTypes from "prop-types";

import classes from './styles/index.scss';

const Layout = (
	{
		children
	}
) => {
	return (
		<div className={classes.layout}>
			{ children }
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

export { Layout };