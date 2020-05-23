import React from 'react';
import Button from '@material-ui/core/Button';

const Numpad = ({ getNumber}) => {
	const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	return (
		<div className="numpad">
		{
			numArr.map(number => {
				return (
					<div key={number}>
					<Button 
					className="button" 
					variant="contained" 
					color="primary" 
					value = {number}
					onClick={getNumber}
					>
						{number}
					</Button>
					</div>
					)
			})			
		}
		</div>
		);
}

export default Numpad;