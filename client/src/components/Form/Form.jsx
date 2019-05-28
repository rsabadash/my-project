import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import {Type} from '../../utils/type';

const Form = (
	{
		onSubmit,
		children,
		initialValues
	}
) => {
	const [formData, setFormData] = useState({
		values: {},
		metadata: {}
	});

	const validatorsRef = useRef({});

	const setValidatorRules = (validators, name) => validatorsRef.current[name] = validators;

	const hasInitialValue = name => initialValues[name] && !formData.values[name];

	const setInitialValue = name => {
		const updatedFormData = {...formData};

		updatedFormData.values[name] = initialValues[name];

		setFormData({...updatedFormData});
	};

	const initValidation = (name, value) => {
		const validators = validatorsRef.current[name];

		if (Type.isNullOrUndefined(validators)) return;

		let validationData = getValidationData(validators, value);

		if (!validationData) {
			validationData = {
				invalid: false,
				errorMessage: ''
			};
		}

		updateValidationData(validationData, name);
	};

	const getValidationData = (validators, value) => {
		let validationData = null;

		if (!Type.isArray(validators)) {
			if (!Type.isFunction(validators)) throwValidatorError(validators);

			validationData = validators(value, formData.values);
		} else {
			for (let validator of validators) {
				if (!Type.isFunction(validator)) throwValidatorError(validator);

				const validationResult = validator(value, formData.values);

				if (validationResult.invalid) {
					validationData = validationResult;
					break;
				}
			}
		}

		return validationData;
	};

	const throwValidatorError = validator => {
		throw new Error(`${validator} in not a function`);
	};

	const updateValidationData = (validationData, name) => {
		const updatedFormData = {...formData};

		if (!updatedFormData.metadata[name]) {
			updatedFormData.metadata[name] = {};
		}

		updatedFormData.metadata[name].invalid = validationData.invalid;
		updatedFormData.metadata[name].errorMessage = validationData.errorMessage;

		setFormData({...updatedFormData});
	};

	const handleChange = (name, value) => {
		const updatedFormData = {...formData};

		if (!updatedFormData.metadata[name]) {
			updatedFormData.metadata[name] = {};
		}

		updatedFormData.values[name] = value;
		updatedFormData.metadata[name].touched = true;

		setFormData({...updatedFormData});
	};

	const handleBlur = (name, value) => {
		initValidation(name, value);
	};
	
	const handleSubmit = event => {
		event.preventDefault();

		Object.keys(validatorsRef.current).forEach(name => {
			initValidation(name, formData.values[name]);
		});

		// onSubmit(formData);
		onSubmit(formData.values);
	};

	const elements = React.Children.map(children, child => {
		if (child.type.name !== 'Field') return React.cloneElement(child);

		const { name, validators } = child.props;

		if (validators) setValidatorRules(validators, name);

		if (hasInitialValue(name)) setInitialValue(name);

		return React.cloneElement(child, {
			...child.props,
			metadata: formData.metadata[name],
			value: formData.values[name],
			onBlur: handleBlur,
			onChange: handleChange
		});
	});

	return (
		<form onSubmit={handleSubmit}>
			{elements}
		</form>
	);
};

Form.defaultProps = {
	initialValues: {}
};

Form.propTypes = {
	onSubmit: PropTypes.func,
	children: PropTypes.node.isRequired,
	initialValues: PropTypes.object
};

export {Form};