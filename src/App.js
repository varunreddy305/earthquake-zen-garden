import React from 'react';
import { Row } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';

function App() {
	return (
		<div className="app p-0">
			<Row className="justify-content-center mt-3">Home</Row>
			<Header />
		</div>
	);
}

export default App;