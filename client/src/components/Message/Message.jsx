import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import classes from './styles/index.scss';

const Message = (
	{
		type,
		content
	}
) => {
	const message = classNames(
		classes.message,
		classes[`message_${type}`]
	);

	return (
		<div className={message}>
			{ content }
		</div>
	);
};

Message.defaultProps = {
	type: 'regular'
};

Message.propTypes = {
	type: PropTypes.string,
	content: PropTypes.string
};

export { Message };