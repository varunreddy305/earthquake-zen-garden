import types from './types';

const deleteSelectedFeature = payload => {
	const type = types.DELETE_SELECTED_FEATURE;
	return Object.freeze({
		type
	});
};

export default deleteSelectedFeature;
