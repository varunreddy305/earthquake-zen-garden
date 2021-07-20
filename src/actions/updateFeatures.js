import types from './types';

const updateFeatures = payload => {
	const type = types.UPDATE_FEATURES;
	return Object.freeze({
		type,
		payload
	});
};

export default updateFeatures;
