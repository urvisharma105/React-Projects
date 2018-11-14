import React from 'react';

/*class Form extends React.Component{
	render(){
		return(
			<div>
				<form onSubmit={this.props.getWeather}>
					<input type="text" name="city" placeholder="City" />
					<input type="text" name="country" placeholder="Country" />
					<button>Check Weather</button>
				</form>
			</div>
		);
	}
}*/

// Creating a stateless functional components

// They do not have any class properties

const Form = props => (
	<div>
		<form onSubmit={props.getWeather}>
			<input type="text" name="city" placeholder="City" />
			<input type="text" name="country" placeholder="Country" />
			<input type="text" name="countrycode" placeholder="Country Code" />
			<button>Check Weather</button>
		</form>
	</div>
);

export default Form;