import React from 'react';
import PropTypes from 'prop-types';

import classes from './styles/index.scss';

const Label = (
	{
		label,
		htmlFor,
		required
	}
) => {
	return (
		<label
			htmlFor={htmlFor}
			className={classes.label}
		>
			{ required ? `${label}*` : label }
		</label>
	)
};

Label.propTypes = {
	label: PropTypes.string,
	htmlFor: PropTypes.string.isRequired,
	required: PropTypes.bool
};

export { Label };