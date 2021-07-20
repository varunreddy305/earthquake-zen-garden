import types from './types';

const updatePlaceSorted = payload => {
	const type = types.UPDATE_PLACE_SORTED;
	return Object.freeze({
		type,
		payload
	});
};

export default updatePlaceSorted;
