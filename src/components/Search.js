import React from 'react';

class Search extends React.Component {
	filterUpdate() {
		//Here you will need to update the value of the filter with the value from the textbox
		const val = this.myValue.value;
		console.log(val);
		this.props.filterUpdate(val);
	}
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
		
		return (
			<form>
				<div class="input-group mb-2">
        			<div class="input-group-prepend searchIcon">
          				<div class="input-group-text">&#x1F50D;</div>
        		</div>
				<input
					type="text"
					placeholder="Type to Filter"
					ref={ (value) => this.myValue = value }
					onChange={this.filterUpdate.bind(this)}
					/></div>
			</form>
		);
	}
}
export default Search;
