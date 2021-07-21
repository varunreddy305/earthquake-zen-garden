import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import './Header.css';
import deleteSelectedFeature from '../../actions/deleteSelectedFeature';
import updatePageTitle from '../../actions/updatePageTitle';

function Header(props) {
	return (
		<div style={{ backgroundColor: '#ededed' }} className="">
			<Row>
				<Col className="p-3">
					<Link
						to="/"
						onClick={() => {
							props.clearSelectedFeature();
							props.changePageTitle('Home');
						}}
					>
						<img src={props.logoImage} className="logo" alt="logo" width="50" height="50" />
					</Link>
				</Col>
				<Col className="my-auto d-flex justify-content-center title">
					<h3>{props.title}</h3>
				</Col>
				<Col className="my-auto d-flex justify-content-end profile">
					<Link
						to="/profile"
						onClick={() => {
							props.changePageTitle('Profile');
						}}
					>
						Welcome {props.firstName}
					</Link>
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
	return {
		changePageTitle: name => {
			dispatch(updatePageTitle(name));
		},
		clearSelectedFeature: () => {
			dispatch(deleteSelectedFeature());
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
