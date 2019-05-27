import { Type } from './type';

export const isEmptyValue = value => Type.isNullOrUndefined(value) || String(value).trim() === '';