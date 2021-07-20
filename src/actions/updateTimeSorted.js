import types from './types';

const updateTimeSorted = payload => {
	const type = types.UPDATE_TIME_SORTED;
	return Object.freeze({
		type,
		payload
	});
};

export default updateTimeSorted;
