import React from 'react';
import { Row } from 'react-bootstrap';
import './App.css';
import Folder from './components/Folder/Folder';
import Header from './components/Header/Header';

function App() {
	return (
		<div className="app p-0">
			<Row className="justify-content-center mt-3">Home</Row>
			<Header />
			<Folder/>
		</div>
	);
}

export default App;
