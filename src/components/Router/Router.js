import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';

const Router = props => {
	return (
		<>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/profile" component={Profile} />
			</Switch>
		</>
	);
};

export default Router;
