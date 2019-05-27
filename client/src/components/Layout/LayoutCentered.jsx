import React from 'react';
import PropTypes from 'prop-types';

import classes from './styles/index.scss';

const LayoutCentered = (
	{
		children
	}
) => {
	return (
		<div className={classes.layout__centered}>
			{ children }
		</div>
	)
};

LayoutCentered.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

export { LayoutCentered };