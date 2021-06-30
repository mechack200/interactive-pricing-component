import React from 'react';
import './charges.component.styles.css';

export const Charges = (props) => {

	return (
		<div className="charges">
			<h1>
				<b>${props.charges }</b>{!props.onToggle ?<sup>/year</sup> : <sup>/month</sup>} 
			</h1>
		</div>
	);
};
