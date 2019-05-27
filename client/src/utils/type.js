export const Type = {
	isNull: value => value === null,
	isUndefined: value => typeof value === 'undefined',
	isNullOrUndefined: value => Type.isNull(value) || Type.isUndefined(value),
	isFunction: value => typeof value === 'function',
	isArray: value => Array.isArray(value)
};