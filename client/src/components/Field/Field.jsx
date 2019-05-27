import React from 'react';
import PropTypes from 'prop-types';

import Label from '../Label';
import Message from '../Message';

import { Type } from '../../utils/type';

import classes from './styles/index.scss';

const Field = props => {
	const {
		name,
		label,
		metadata,
		required,
		component,
	} = props;

	return (
		<div className={classes.field}>
			{ !Type.isNullOrUndefined(label) && (
				<Label
					label={label}
					htmlFor={name}
					required={required}
				/>
			)}
			{ component(props) }
			{
				metadata.invalid && (
					<Message
						type="error"
						content={metadata.errorMessage}
					/>
				)
			}
		</div>
	)
};

Field.defaultProps = {
	value: '',
	metadata: {},
	hideLabel: false,
};

Field.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	value: PropTypes.string,
	label: PropTypes.string,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	metadata: PropTypes.object,
	validators: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.array,
	]),
	required: PropTypes.bool,
	component: PropTypes.func.isRequired,
	placeholder: PropTypes.string
};

export { Field };