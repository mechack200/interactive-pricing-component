import React from 'react';
import { Header } from '../header/Header.component';
import './curve.component.styles.css';

export const CurveSvg = () => {
	return (
		<div className="svg-container">
					<svg id="ringSvg" xmlns="http://www.w3.org/2000/svg" width="146" height="145">
						<g fill="none" fill-rule="evenodd" stroke="#CFD8EF">
							<circle cx="63" cy="82" r="62.5" />
							<circle cx="105" cy="41" r="40.5" />
						</g>
					</svg>
				 <div className="introductory_text">
				 
				<h2>Simple, traffic-based pricing</h2>
				<p>sign up for 30 days trial. No creadit card required</p>
				 </div>
		</div>
	);
};
