import React from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class MyChart extends React.Component {
	constructor(props){
		super(props); 
		this.state = {
			chartData:props.chartData
		}
	}

	render() {
		return (
			<div>
			{
				this.props.city && this.props.country && 
				<div>
					<h2 className="title-container__chart">Temperature during the day in {this.props.city} </h2> 
					<Line 
						data={this.props.chartData}
						width={100}
						height={50}
						options = {{
							legend:{
								display: true,
								position: 'bottom'
							}
						}}
					/>	
				</div>
			}
    </div>
		);
	}
}

export default MyChart;