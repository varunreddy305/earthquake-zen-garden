import React from 'react';
import { Route, Switch } from 'react-router';
import Detail from '../Details/Detail';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';

const Router = props => {
	return (
		<>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/profile" component={Profile} />
				<Route path="/detail" component={Detail} />
			</Switch>
		</>
	);
};

export default Router;
