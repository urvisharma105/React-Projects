import React from 'react';
import {render} from 'react-dom';
import ContactsList from './ContactsList';

let contacts = [
	{
		id: 0,
		name: 'Urvi',
		phone: '00000'
	},

	{
		id: 1,
		name: 'Rahul',
		phone: '11111'
	},

	{
		id: 2,
		name: 'Tina',
		phone: '22222'
	}
]

class App extends React.Component {
	render() {
		console.log(this.props.entry);
		return(
				<div>
					<h1> Contact List </h1>
					<ContactsList entry={this.props.entry}/>
				</div>
		);
	}
}

render(<App entry={contacts} />, document.getElementById('app'));