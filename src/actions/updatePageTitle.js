import types from './types';

const updatePageTitle = payload => {
	const type = types.UPDATE_PAGE_TITLE;
	return Object.freeze({
		type,
		payload
	});
};

export default updatePageTitle;
