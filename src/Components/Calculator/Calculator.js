import React, { Component } from 'react';
import './Calculator.css';
import TextField from '@material-ui/core/TextField';
import Appbar from '../Appbar/Appbar';
import Numpad from '../Numpad/Numpad';
import Oppad from '../Oppad/Oppad';
import InputShow from '../InputShow/InputShow';


import { connect } from 'react-redux';
import { getNumber, getOperation } from '../../Containers/app/actions';

	const valueFromButton = (event) => {
			if(event.target.value === undefined) {
				return event.target.innerHTML;
			}
			return event.target.value;
	};

	const mapStateToProps = state => {
		return {
			number1: state.numberSetter.number1,
			number2: state.numberSetter.number2,
			operationCount: state.numberSetter.operationCount,
			operation: state.numberSetter.operation,
			result: state.numberSetter.result
	}
	};


	const mapDispatchToProps = (dispatch) => {
		return {
		getNumber: (event) => dispatch(getNumber(valueFromButton(event))),
		getOperation: (event) =>dispatch(getOperation(valueFromButton(event)))
	}
	}

class Calculator extends Component {
	render() {

	const { 
		number1, 
		number2, 
		getNumber, 
		getOperation, 
		result,
		operation 
	} = this.props;

	return(
	<div className ="structure">

		<Appbar />
		<InputShow
		number1={number1}
		number2= {number2}
		operation = {operation}
		result = {result}
		/>
		
		<Numpad getNumber={getNumber}/>
		<Oppad getOperation={getOperation}/>
	</div> 
		);
}
}

 export default connect(mapStateToProps, mapDispatchToProps)(Calculator);