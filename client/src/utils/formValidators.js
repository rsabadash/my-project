import { isEmptyValue } from './string';

export const require = value => {
	const isInvalid = isEmptyValue(value);
	const message = isInvalid ? 'Field is required' : '';

	return {
		invalid: isInvalid,
		errorMessage: message
	};
};

export const minLength = number => {
	return value => {
		const isInvalid = String(value).length < number;
		const message = isInvalid ? `Field must contain at least ${number} characters.` : '';

		return {
			invalid: isInvalid,
			errorMessage: message
		}
	};
};

export const maxLength = number => {
	return value => {
		const isInvalid = String(value).length > number;
		const message = isInvalid ? `Field must contain less than ${number} characters.` : '';

		return {
			invalid: isInvalid,
			errorMessage: message
		}
	};
};

export const email = email => {
	const re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
	const isInvalid =  !re.test(email);
	const message = isInvalid ? 'Invalid email.' : '';

	return {
		invalid: isInvalid,
		errorMessage: message
	}
};

export const crossFields = dependentFieldName => {
	return (currentValue, allValues) => {
		const isInvalid = !isEmptyValue(allValues[dependentFieldName]) && currentValue !== allValues[dependentFieldName];
		const message = isInvalid ? 'Test' : '';

		return {
			invalid: isInvalid,
			errorMessage: message
		}
	}
};