import React from 'react';
import Button from '@material-ui/core/Button';

const Oppad = ({ getOperation }) => {
	const operationArr = ['+', '-', '*', '/', 'Clear', '='];
	return (
		<div className="oppad">
		{
			operationArr.map(operation => {
				return (
					<div key={operation}>
					<Button 
					className="button" 
					variant="outlined" 
					color="primary"
					value= {operation}
					onClick= {getOperation}>
						{operation}
					</Button>
					</div>
					)
			})			
		}

		</div>
		);
}

export default Oppad;