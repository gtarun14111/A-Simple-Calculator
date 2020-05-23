import React from 'react';
import TextField from '@material-ui/core/TextField';
import './InputShow.css';

const InputShow = ({ number1, number2, operation, result }) => {
	let showOperation = operation;
	let showNumber1 = number1 === 0 ? "" : number1;
	let showNumber2 = number2 === 0 ? "" : number2;
	let showResult = result === 0 ? "" : result;
	if(operation === "Clear" || operation === "=") {
		showOperation = "";
	}

	if(showNumber1 === showResult) {
		if(showNumber2 === "") {
			showOperation = "";
		}
	}

	if(showResult) {
		if(showNumber1) {
			showResult = "";
		}
		}

	return (
		<div>
			<label className="theLabel"> {showNumber1} {showOperation} {showNumber2} {showResult}</label>
		</div>
		);
}

export default InputShow;
