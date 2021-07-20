import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { compareValues, comparePlaceValues } from '../../managers/DataSortManager';

const Home = props => {
	const {
		features,
		updateFeature,
		magSorted,
		timeSorted,
		placeSorted,
		changePlaceSorted,
		changeMagSorted,
		changeTimeSorted,
		sortFeatures
	} = props;

	function handleOnTitleSort(options, desc, isSorted, toSort) {
		const sorted = comparePlaceValues(options, desc, isSorted, toSort);
		sortFeatures(sorted);
	}

	function handleSort(options, desc, isSorted, toSort) {
		const sorted = compareValues(options, desc, isSorted, toSort);
		sortFeatures(sorted);
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
										handleOnTitleSort(features, 'place', placeSorted, changePlaceSorted);
									}}
								>
									Title
								</th>
								<th
									style={{ textAlign: 'center' }}
									onClick={() => {
										handleSort(features, 'mag', magSorted, changeMagSorted);
									}}
								>
									Magnitude
								</th>
								<th
									style={{ textAlign: 'center' }}
									onClick={() => {
										handleSort(features, 'time', timeSorted, changeTimeSorted);
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
