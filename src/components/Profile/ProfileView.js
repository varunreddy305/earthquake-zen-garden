import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function ProfileView(props) {
	useEffect(() => {
		props.pageTitle();
	}, []);
	return (
		<Container style={{ maxWidth: '720px' }}>
			<Row className="d-flex justify-content-center my-4" style={{ fontWeight: 'bold' }}>
				Profile
			</Row>
			<Row className="container-fluid">
				<Col md="auto" className="d-inline">
					<img src={props.avatar} alt="avatar" width="200" height="200" />
				</Col>
				<Col>
					<table>
						<tbody>
							<tr>
								<th>FirstName</th>
								<td> {props.firstName}</td>
							</tr>
							<tr>
								<th>LastName</th>
								<td> {props.lastName}</td>
							</tr>
							<tr>
								<th>Phone</th>
								<td>{props.phone}</td>
							</tr>
							<tr>
								<th>Email</th>
								<td>{props.email}</td>
							</tr>
							<tr>
								<th style={{ display: 'inline' }}>Bio</th>
								<td>{props.bio}</td>
							</tr>
						</tbody>
					</table>
				</Col>
			</Row>
		</Container>
	);
}

export default ProfileView;
