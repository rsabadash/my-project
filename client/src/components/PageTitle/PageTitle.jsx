import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import classes from './styles/index.scss';

const PageTitle = (
	{
		children,
		position
	}
) => {
	const pageTitleClasses = classNames(
		classes.pageTitle,
		classes[`pageTitle_${position}`]
	);

	return (
		<h1 className={pageTitleClasses}>
			{ children }
		</h1>
	)
};

PageTitle.defaultProps = {
	position: 'left'
};

PageTitle.propTypes = {
	children: PropTypes.string
};

export { PageTitle };