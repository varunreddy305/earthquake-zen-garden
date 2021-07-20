import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const Home = props => {
	const { features, updateFeature } = props;

	function compareValues(options, desc) {
		const sorted = options.sort((a, b) => {
			return a.properties[desc] - b.properties[desc];
		});
		props.sortFeatures(sorted);
	}

	function handleOnClick(feature) {
		updateFeature(feature);
	}

	let i = 0;
	function getOptions(features) {
		return features.map(feature => {
			i++;
			return (
				<tr key={i}>
					<td>
						<Link to="/detail">
							<span
								onClick={() => {
									handleOnClick(feature);
								}}
							>
								{feature.properties.place}
							</span>
						</Link>
					</td>
					<td style={{ textAlign: 'center' }}>{feature.properties.mag}</td>
					<td style={{ textAlign: 'center' }}>{new Date(feature.properties.time).toLocaleString()}</td>
				</tr>
			);
		});
	}

	return (
		<Container style={{ maxWidth: '720px' }}>
			<Row className="mt-4 justify-content-center" style={{ fontWeight: 'bold' }}>
				{props.title}
			</Row>
			<Row className="mt-4">
				<Col>
					<table style={{ width: '100%' }}>
						<thead>
							<tr>
								<th
									onClick={() => {
										compareValues(features, 'title');
									}}
								>
									Title
								</th>
								<th
									style={{ textAlign: 'center' }}
									onClick={() => {
										compareValues(features, 'mag');
									}}
								>
									Magnitude
								</th>
								<th
									style={{ textAlign: 'center' }}
									onClick={() => {
										compareValues(features, 'time');
									}}
								>
									Time
								</th>
							</tr>
						</thead>
						<tbody>{getOptions(features)}</tbody>
					</table>
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
