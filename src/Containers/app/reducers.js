import { GET_NUMBER, GET_OPERATION } from './constants';

const intialState = {
	text: ""
}


const number = {
	number1: 0,
	number2: 0,
	operationCount: 0,
	operation: "",
	result: 0
}

export const numberSetter= (state = number, action = {}) => {
	const { number1, number2, operation } = state;
	const doOperation = (number1, number2, operation) => {
		
		switch(operation) {
			case '+': return  number1 + number2 ;
			break;
			case '-': return  number1 - number2 ;
			break;
			case '*': return  number1 * number2 ;
			break;
			case '/': return  number1 / number2 ;
			break;
		}
	}

	if(action.type === GET_NUMBER) {
		if(state.operationCount === 0) {
			return Object.assign({}, state, {number1: (number1*10)+Number(action.payload)})
		}
		else if(state.operationCount > 0) {
			return Object.assign({}, state, {number2: (number2*10)+Number(action.payload)})
		}

	}

	if(action.type === GET_OPERATION) {
		if(action.payload === "Clear") {
			return Object.assign({}, state, {
				result: "",
				number1: 0,
				number2: 0,
				operation: action.payload,
				operationCount: 0
			})
		}
		else if(action.payload === "=") {
			return Object.assign({}, state, {
				result: doOperation(number1, number2, operation),
				number1: 0,
				number2: 0,
				operation: action.payload,
				operationCount: 0
			})
		}
		if(state.operationCount >= 1) {
			return Object.assign({}, state, {
				result: doOperation(number1, number2, operation),
				number1: doOperation(number1, number2, operation),
				number2: 0,
				operation: action.payload,
				operationCount: state.operationCount + 1
			})
		}
		return Object.assign({}, state, {operationCount: state.operationCount + 1, operation: action.payload})
		
	}



	else {
		return state
	}
}