import Data from './data.json';

const buildState = () => {
	const initialState = {
		site: {
			title: Data.site.title,
			logoImage: Data.site.logoImage,
			pageTitle: 'Home',
			magSorted: 1,
			timeSorted: 1
		},
		profile: Data.profile,
		metaData: Data.data.metadata,
		features: Data.data.features,
		selectedFeature: []
	};
	return initialState;
};

export default buildState;
