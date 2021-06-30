import React, { useState, useEffect } from 'react';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Slider from 'rc-slider';
// import './slider.styles.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export const SliderComponent = (props) => {
	// const {onToggle, toggleBtn, sliderValues,onChangeSlider} = props
	// // const [sliderValues, setSliderValue] = useState(props);
	// const [value, setValue] = useState(props);

	// useEffect(() => {
	// 	setValue(props);
	// }, [props]);

	// const onSliderChange = (value) => {
	// 	// countDigit(value);
	// 	console.log(`${value.sliderValues}k`);
	// 	setState({
	// 		value,
	// 	});
	// countDigit(value);
	// };
	const onAfterChange = (value) => {
		console.log(`${value}k`); //eslint-disable-line
	};

	return (
		<div className="slider">
			<div style={{ margin: 50 }}>
				<Slider
					min={props.min}
					max={props.max}
					value={props.value}
					onChange={props.onChangeSlider}
					railStyle={{
						height: 2,
					}}
					handleStyle={{
						height: 28,
						width: 28,
						marginLeft: -14,
						marginTop: -14,
						backgroundColor: 'hsl(174, 86%, 45%)',
						border: 0,
					}}
					trackStyle={{
						background: 'hsl(174, 86%, 45%)',
					}}
				/>
			</div>
		</div>
	);
};
