import { combineReducers } from 'redux';

function site(state = {}, action) {
	switch (action.type) {
		default:
			return state;
	}
}

function profile(state = {}, action) {
	switch (action.type) {
		default:
			return state;
	}
}

const reducer = combineReducers({ site, profile });

export default reducer;
