import types from './types';

const updateMagSorted = payload => {
	const type = types.UPDATE_MAG_SORTED;
	return Object.freeze({
		type,
		payload
	});
};

export default updateMagSorted;
