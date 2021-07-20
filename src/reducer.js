import { combineReducers } from 'redux';
import types from './actions/types';

function site(state = {}, action) {
	switch (action.type) {
		case types.UPDATE_PAGE_TITLE:
			return { ...state, pageTitle: action.payload };
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
