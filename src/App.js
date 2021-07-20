import React from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import Router from './components/Router/Router';

function App(props) {
	return (
		<div className="app p-0">
			<Row className="justify-content-center mt-3">{props.title}</Row>
			<Header />
			<Router />
		</div>
	);
}

function mapStateToProps(state) {
	return {
		title: state.site.pageTitle
	};
}

export default connect(mapStateToProps, null)(App);
