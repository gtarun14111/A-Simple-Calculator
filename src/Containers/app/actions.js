import { GET_NUMBER, GET_OPERATION } from './constants';

export const getNumber = (text) => {
	return {
	type: GET_NUMBER,
	payload: text
}
}

export const getOperation = (text) => ({
	type: GET_OPERATION,
	payload: text
})