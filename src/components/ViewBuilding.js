import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const { data, selectedBuilding} = this.props;
		const selected = data[selectedBuilding];

		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p><br></br>
				<tr>
					<td><b>Code:</b></td>
					<td>{selected.code}</td>
				</tr>
				<tr>
					<td><b>Name:</b></td>
					<td>{selected.name}</td>
				</tr>
				{selected.address &&
					<tr>
						<td><b>Address: &nbsp;</b></td>
						<td>{selected.address}</td>
					</tr>
				}
				<br></br>
				{selected.coordinates &&
					<div>
						<tr>
							<td><i>Latitude: &nbsp;</i></td>
							<td>{selected.coordinates.latitude}</td>
						</tr>
						<tr>
							<td><i>Longitude: &nbsp;</i></td>
							<td>{selected.coordinates.longitude}</td>
						</tr>
					</div>
				}
			</div>
		);
	}
}
export default ViewBuilding;
