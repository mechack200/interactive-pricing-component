import React from 'react';
import './App.css';
import { CurveSvg } from './Components/curve-svg-compnent/curve.svg.component';
import { Pricing } from './Components/Pricing/Pricing.component';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

// If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.

export class App extends React.Component {
	state = { sliderValues: [0] };

	handleChange = (sliderValues) => {
		this.setState({ sliderValues });
	};

	render() {
		const { sliderValues } = this.state;
		return (
			<div className="App">
				<CurveSvg />
				<Pricing onChange={this.onChange} sliderValues={sliderValues} />
				{/* <div>
					{sliderValues[0]} - {sliderValues[1]}
					<Range
						min={0}
						max={10000}
						onChange={this.handleChange}
						defaultValue={sliderValues}
						tipFormatter={(value) => <span className="tooltip">{value}€</span>}
					/>
				</div> */}
			</div>
		);
	}
}

export default App;
