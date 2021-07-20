import Data from './data.json';

const buildState = () => {
	const initialState = {
		site: {
			title: Data.site.title,
			logoImage: Data.site.logoImage
		},
		profile: Data.profile
	};
	return initialState;
};

export default buildState;
