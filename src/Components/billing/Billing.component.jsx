import React from 'react';
import './billing.component.styles.css';

export const Billing = () => {
	return (
		<div className="billing">
			<div className="monthly_billing">
				<p>Monthly Billing</p>
				<button>
					<div className="togglebtn"></div>
				</button>
			</div>
			<div className="yearly_billing">
				<p>Yearly Billing</p>
				<input type="text" placeholder=" 21% discount" />
			</div>
		</div>
	);
};
