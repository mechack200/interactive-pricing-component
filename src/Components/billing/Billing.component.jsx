import React, { useState, useEffect } from 'react';
import './billing.component.styles.css';

export const Billing = (props) => {
	const { onToggle, toggleBtn } = props;

	return (
		<div className="billing">
			<div className="monthly_billing">
				<p>Monthly Billing</p>
				<button className= {onToggle ? 'btn changeColor' : 'btn'}  
					onClick={() => {  
						toggleBtn();
						
					}}
				>
					<div className="togglebtn" style={{color:"red"}}>{onToggle}</div>
				</button>
			</div>
			<div className="yearly_billing">
				<p>Yearly Billing</p>
				<input type="text" placeholder="25% discount" />
			</div>
		</div>
	);
};
