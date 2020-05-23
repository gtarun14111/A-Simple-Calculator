import React from 'react';


const TheForm = ({ getInput1, copy }) => {
	return(
	<div>
		<label htmlFor="input">  Give an input: </label>
		<input type="text" id="input" onChange = {getInput1}/><br />
		<label htmlFor="output"> Give an output: </label>
		<input type="text" id="output" value={copy}/><br />
		<button>
			Press this button!
		</button>
	</div> 
		);
}

export default TheForm;