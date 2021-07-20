import React from 'react';
import { Container } from 'react-bootstrap';

function FolderView(props) {
	console.log(props);
	return (
		<Container>
			<img src={props.avatar} alt="avatar" />
		</Container>
	);
}

export default FolderView;
