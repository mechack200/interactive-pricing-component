import React from 'react';
import { Header } from '../header/Header.component';
import './curve.component.styles.css';

export const CurveSvg = () => {
	return (
		<div className="svg-container">
			<div className="curve-svg">
				<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="449">
					<path
						fill="#F1F5FE"
						fill-rule="evenodd"
						d="M0 0h1440v449H191.5C85.737 449 0 363.263 0 257.5V0z"
					/>
				</svg>
				<div className="ring-logo">
					<svg xmlns="http://www.w3.org/2000/svg" width="146" height="145">
						<g fill="none" fill-rule="evenodd" stroke="#CFD8EF">
							<circle cx="63" cy="82" r="62.5" />
							<circle cx="105" cy="41" r="40.5" />
						</g>
					</svg>
				</div>
			</div>
			<Header />
		</div>
	);
};
