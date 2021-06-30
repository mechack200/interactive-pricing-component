import React from 'react';
import './App.css';
import { CurveSvg } from './Components/curve-svg-compnent/curve.svg.component';
import { Pricing } from './Components/Pricing/Pricing.component';
export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			min: 10000,
			max: 1100000,
			onToggle: false,
			value: 0,
			charges: 0,
			customerPreview: '0K'
		};
	}

	onChangeSlider = (value) => {
		this.setState(
			{
				value,
			},
			() => {
				console.log(this.state.value);
				this.calculateCharges(value);
			}
		);
	};

	calculateCharges = (slider_value) => {	
		let charges_with_discount;
		const discount = 0.25
		let price_tags = [8, 12, 16, 24, 36];
		let customer_package_box =[ '10K', '50K', '100K' , '500K', "1M" ]
		const { onToggle } = this.state;
		//if package is yealy billing
		if (!onToggle) {
			if (slider_value >= 10000 && slider_value < 50000) {
				this.setState({customerPreview: customer_package_box[0]})
				charges_with_discount = (price_tags[0] * discount).toFixed(2);
				this.setState({ charges: charges_with_discount });
			} else if (slider_value >= 50000 && slider_value < 100000) {
				this.setState({customerPreview: customer_package_box[1]})
				 charges_with_discount = (price_tags[1] * discount).toFixed(2);
				this.setState({ charges: charges_with_discount });
			} else if (slider_value >= 100000 && slider_value < 500000) {
				this.setState({customerPreview: customer_package_box[2]})
				 charges_with_discount = (price_tags[2] * discount).toFixed(2)
				this.setState({ charges: charges_with_discount });
			} else if (slider_value >= 500000 && slider_value < 1000000) {
				this.setState({customerPreview: customer_package_box[3]})
				charges_with_discount = (price_tags[3]  * discount).toFixed(2);
				this.setState({ charges: charges_with_discount });
			} else if (slider_value >= 100000) {
				this.setState({customerPreview: customer_package_box[4]})
				charges_with_discount = (price_tags[4] * discount).toFixed(2);
				this.setState({ charges: charges_with_discount });
			}
		} else if (onToggle === false) {
			let price_tags = [8, 12, 16, 24, 36];
			// else monthly charges apply without discount
			 if(slider_value >= 10000 && slider_value < 50000){
				this.setState({customerPreview: customer_package_box[0]})
				this.setState({ charges: price_tags[0].toFixed(2) });
			 }		
		} else if (slider_value >= 50000 && slider_value < 100000) {
			this.setState({customerPreview: customer_package_box[1]})
			this.setState({ charges:price_tags[1].toFixed(2)});
		} else if (slider_value >= 100000 && slider_value < 500000) {
			this.setState({customerPreview: customer_package_box[2]})
			this.setState({ charges:price_tags[2].toFixed(2)});
		} else if (slider_value >= 500000 && slider_value < 1000000) {
			this.setState({customerPreview: customer_package_box[3]})
			this.setState({ charges:price_tags[3].toFixed(2)});
		} else if (slider_value >= 100000) {
			this.setState({customerPreview: customer_package_box[4]})
			this.setState({ charges:price_tags[4].toFixed(2)});		
		}
	};
//change the button
	toggleBtn = () => {
		this.setState((prevState) => ({
			onToggle: !prevState.onToggle,
		}));
		console.log(this.state.onToggle);
	};

	componentDidMount() {
		this.setState({customerPreview:"0K"})
		this.toggleBtn();
		this.onChangeSlider();
	}
	render() {
		const { onToggle, max, min, value, charges, customerPreview } = this.state;
		return (
			<div className="App">
				<CurveSvg />
				<Pricing
					toggleBtn={this.toggleBtn}
					onToggle={onToggle}
					onChangeSlider={this.onChangeSlider}
					min={min}
					max={max}
					value={value}
					charges={charges}
					customerPreview={customerPreview}
				/>
			</div>
		);
	}
}

export default App;
