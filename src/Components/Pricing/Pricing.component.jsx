import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { check } from '@fortawesome/free-solid-svg-icons';
import { Charges } from '../charges/charges.component';
import { Packages } from '../packages/Packages.component.';
import './Pricing.component.styles.css';
import { Billing } from '../billing/billing.component';
import { SliderComponent } from '../slider/slider';

export const Pricing = () => {
	return (
		<div className="price_component_card">
			<div className="pricing">
				<Packages />
				<Charges />
				<SliderComponent />
				<Billing />
				<div className="bottom_part">
					<div className="CTA_features">
						<p>
							&#10004;<span>Unlimited website</span>
						</p>
						<p>
							&#10004;<span>100% data ownership</span>{' '}
						</p>
						<p>
							&#10004; <span>email reports</span>{' '}
						</p>
					</div>
					<div className="trial-container">
						<div className="trial-box">
							<p>start trial</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
