import React from 'react';
import { Container, Row } from 'react-bootstrap';

const DetailView = props => {
	return (
		<Container>
			<Row className="mt-4 mb-3 justify-content-center" style={{ fontWeight: 'bold' }}>
				{props.title}
			</Row>
			<Container className="mt-4 mb-3 justify-content-center" style={{ textAlign: '-webkit-center' }}>
				<table>
					<tbody>
						<tr>
							<th>Title</th>
							<td> {props.title}</td>
						</tr>
						<tr>
							<th>Magnitude</th>
							<td> {props.feature.properties.mag}</td>
						</tr>
						<tr>
							<th>Time</th>
							<td>{new Date(props.feature.properties.time).toLocaleString()}</td>
						</tr>
						<tr>
							<th>Status</th>
							<td>{props.feature.properties.status}</td>
						</tr>
						<tr>
							<th>Tsunami</th>
							<td>{props.feature.properties.tsunami}</td>
						</tr>
						<tr>
							<th>Type</th>
							<td>{props.feature.properties.type}</td>
						</tr>
					</tbody>
				</table>
			</Container>
		</Container>
	);
};

export default DetailView;
