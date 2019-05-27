import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import classes from './styles/index.scss';

const TextInput = (
	{
		name,
		type,
		value,
		onBlur,
		onChange,
		metadata,
		required,
		placeholder
	}
) => {
	const handleBlur = event => {
		const {
			name,
			value
		} = event.target;

		onBlur(name, value);
	};

	const handleChange = event => {
		const {
			name,
			value
		} = event.target;

		onChange(name, value);
	};

	const inputClasses = classNames(
		classes.input,
		{
			[classes.input_error]: metadata.invalid
		}
	);

	return (
		<input
			id={name}
			name={name}
			type={type}
			value={value}
			onBlur={handleBlur}
			onChange={handleChange}
			placeholder={required ? `${placeholder}*` : placeholder }
			className={inputClasses}
			autoComplete="off"
		/>
	)
};

TextInput.defaultProps = {
	type: 'text',
	value: '',
	metadata: {},
	placeholder: 'Fill in'
};

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	value: PropTypes.string,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	metadata: PropTypes.object,
	required: PropTypes.bool,
	placeholder: PropTypes.string
};

export { TextInput };