import React from 'react';
import {render} from 'react-dom';

class Contact extends React.Component {
	render() {
		console.log(this.props.value);
		return(
			<ul>
				<li>{this.props.value.name} {this.props.value.phone}</li>
			</ul>
		);
	}
}

export default Contact;