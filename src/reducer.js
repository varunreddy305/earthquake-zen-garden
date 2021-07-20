import { combineReducers } from 'redux';
import types from './actions/types';

function site(state = {}, action) {
	switch (action.type) {
		case types.UPDATE_PAGE_TITLE:
			return { ...state, pageTitle: action.payload };
		case types.UPDATE_MAG_SORTED:
			return { ...state, magSorted: action.payload };
		case types.UPDATE_TIME_SORTED:
			return { ...state, timeSorted: action.payload };
		case types.UPDATE_PLACE_SORTED:
			return { ...state, placeSorted: action.payload };
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

function metaData(state = {}, action) {
	switch (action.type) {
		default:
			return state;
	}
}

function features(state = {}, action) {
	switch (action.type) {
		case types.UPDATE_FEATURES:
			const newState = action.payload;
			return [...newState];
		default:
			return state;
	}
}

function selectedFeature(state = {}, action) {
	switch (action.type) {
		case types.UPDATE_SELECTED_FEATURE:
			return [...state, action.payload];
		case types.DELETE_SELECTED_FEATURE:
			const newState = state;
			newState.pop();
			return newState;
		default:
			return state;
	}
}

const reducer = combineReducers({ site, profile, metaData, features, selectedFeature });

export default reducer;
