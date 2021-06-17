import React from 'react';
import './App.css';
import { CurveSvg } from './Components/curve-svg-compnent/curve.svg.component';
import { Pricing } from './Components/Pricing/Pricing.component';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

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
