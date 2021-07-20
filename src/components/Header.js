import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Data from '../data.json';
import './Header.css';

function Header(props) {
	return (
		<div style={{ backgroundColor: '#ededed' }} className="">
			<Row>
				<Col className="p-3">
					<img src={Data.site.logoImage} className="logo" alt="logo" width="50" height="50" />
				</Col>
				<Col className="my-auto d-flex justify-content-center">{Data.site.title}</Col>
				<Col className="my-auto d-flex justify-content-end profile">Welcome {Data.profile.firstName}</Col>
			</Row>
		</div>
	);
}

export default Header;
