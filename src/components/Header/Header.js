import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import './Header.css';

function Header(props) {
	return (
		<div style={{ backgroundColor: '#ededed' }} className="">
			<Row>
				<Col className="p-3">
					<a href="/">
						<img src={props.logoImage} className="logo" alt="logo" width="50" height="50" />
					</a>
				</Col>
				<Col className="my-auto d-flex justify-content-center">{props.title}</Col>
				<Col className="my-auto d-flex justify-content-end profile">
					<a href="/profile">Welcome {props.firstName}</a>
				</Col>
			</Row>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		title: state.site.title,
		logoImage: state.site.logoImage,
		firstName: state.profile.firstName
	};
}

function mapDispatchToProps(dispatch) {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
