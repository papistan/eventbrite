import React, { Component } from 'react';


class Search extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	};


	render() {
		return (
			<div className="search-bar">
				<input 
					value={this.state.term || "Search City"} 
					onChange={event => this.onInputChange(event.target.value)} />
				
					
			</div>
		)
	}

	onInputChange(term) {
		this.setState({ term });
		this.props.onSearchTermChange(term);
	};
}


export default Search;