import React from 'react';

/*class Weather extends React.Component{
	render(){
		return(
			<div>
				{this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
				{this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
				{this.props.city && this.props.country && <p>Location: {this.props.city},{this.props.country}</p>}
				{this.props.description && <p>Condition: {this.props.description}</p>}
				{this.props.error && <p>ERROR: {this.props.error}</p>}
            </div>
		);
	}
}*/

// Creating a stateless functional components

// They do not have any class properties



const Weather = props => (
	<div>
		{
			props.temperature && 
			<p className = "weather__key">Temperature: 
				<span className = "weather__value"> {props.temperature}</span>
			</p>
		}
		{
			props.humidity && 
			<p className = "weather__key">Humidity: 
				<span className = "weather__value"> {props.humidity}</span>
			</p>
		}
		{
			props.city && props.country && 
			<p className = "weather__key">Location: 
				<span className = "weather__value"> {props.city},{props.country}</span>
			</p>
		}
		{
			props.description && 
			<p className = "weather__key">Condition:
				<span className = "weather__value"> {props.description}</span>
			</p>
		}
		{
			props.error && 
			<p className = "weather__error">ERROR:
				<span className = "weather__value"> {props.error}</span>
			</p>
		}
    </div>
);

export default Weather;