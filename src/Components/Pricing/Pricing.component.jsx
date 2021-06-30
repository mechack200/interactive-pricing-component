import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { check } from '@fortawesome/free-solid-svg-icons';
import { Charges } from '../charges/charges.component';
import { Packages } from '../packages/Packages.component.';
import './Pricing.component.styles.css';
import { Billing } from '../billing/billing.component';
import { SliderComponent } from '../slider/slider';

// 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

export const Pricing = (props) => {
	// const [billState, setBill] = useState(false);
	// // const [price, setPrice] = useState(100);
	// const [sliderValues, setSliderValue] = useState([10000, 1000000]);

	return (
			<div className="pricing">
				<Packages value={props.value}  customerPreview={props.customerPreview}/>
				<Charges charges={props.charges} onToggle={props.onToggle} />
				<SliderComponent
					onToggle={props.onToggle}
					// sliderValues={props.sliderValues}
					max={props.max}
					min={props.min}
					value={props.value}
					onChangeSlider={props.onChangeSlider}
				/>
				<Billing toggleBtn={props.toggleBtn} onToggle={props.onToggle}/>
				
				<div className="bottom_part">
					<div className="CTA_features">
						<p>
							&#10004;<span>Unlimited website</span>
						</p>
						<p>
							&#10004;<span>100% data ownership</span>{' '}
						</p>
						<p>
							&#10004; <span>  email reports</span>{' '}
						</p>
					</div>
					<div className="trial-container">
						<div className="trial-box">
							start my trial
						</div>
					</div>
				</div>
			</div>
	);
};
