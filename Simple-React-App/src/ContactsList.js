import React from 'react';
import {render} from 'react-dom';
import Contact from './Contact';


class ContactsList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			search: '',
			entry: props.entry
		};
	}

	updateSearch(event){
		console.log(event.target.value);
		this.setState({
			search:event.target.value.substr(0,10)
		});
	}

	addContact(event){
		event.preventDefault();
		console.log(this);

		let name = this.refs.name.value;
		let phone = this.refs.phone.value;
		let id = Math.floor((Math.random()*100)+1);

		this.setState({
			entry: this.state.entry.concat({id, name, phone})
		});

		this.refs.name.value = '';
		this.refs.phone.value = '';
	}

	render() {
		//console.log(this.state.entry);

		let filteredContent = this.state.entry.filter((contact) =>{
			return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
		});

		
		return(
			<div>

				<input type = "text" 
					placeholder = "Search"
	    			value = {this.state.search}
					onChange = {this.updateSearch.bind(this)} />
			
				<form onSubmit= {this.addContact.bind(this)}>
					<input type = "text" ref = "name" />
					<input type = "text" ref = "phone" />
					<button type = "submit">Add Contact</button>
				</form>

				<ul> 
				{
					filteredContent.map((contact) => {
						return <Contact value = {contact} key = {contact.id}/>
					})
				}
				</ul>
			
			</div>
		);
	}
}

export default ContactsList;