import React, { Component } from 'react';


class Search extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	};

	onInputChange(term) {
		this.setState({ term });
		this.props.onSearchTermChange(term);
	};

	render() {
		return (
			<div className="search-bar">
				<input 
					value={this.state.term || "Search events or categories"} 
					onChange={event => this.onInputChange(event.target.value)} />
				<input 
					value={this.state.term || "Enter City"} 
					onChange={event => this.onInputChange(event.target.value)} />
				</div>
		)
	}
}


export default Search;