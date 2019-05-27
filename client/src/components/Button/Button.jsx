import React from 'react';
import PropTypes from 'prop-types';

import classNanes from 'classnames';

import classes from './styles/index.scss';

const Button = (
	{
		type,
		children,
		position
	}
) => {
	const buttonClasses = classNanes(
		classes.button,
		classes[`button_${position}`]
	);

	return (
		<div className={classes.buttonContainer}>
			<button
				type={type}
				className={buttonClasses}
			>
				{ children }
			</button>
		</div>
	)
};

Button.defaultProps = {
	position: 'left'
};

Button.propTypes = {
	type: PropTypes.string,
	children: PropTypes.string,
	position: PropTypes.string
};

export { Button };