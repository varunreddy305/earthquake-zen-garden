import types from './types';

const updateSelectedFeature = payload => {
	const type = types.UPDATE_SELECTED_FEATURE;
	return Object.freeze({
		type,
		payload
	});
};

export default updateSelectedFeature;
