import React from 'react';
import { Charges } from '../charges/charges.component';
import { Packages } from '../packages/Packages.component.';
import './Pricing.component.styles.css';
import '../slider/Slider.component';
import { RangeSlider } from '../slider/Slider.component';
import { Billing } from '../billing/billing.component';

export const Pricing = () => {
	return (
		<div className="pricing">
			<Packages />
			{/* <RangeSlider /> */}
			<Charges />
			<Billing />
		</div>
	);
};
