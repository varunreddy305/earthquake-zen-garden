import { connect } from 'react-redux';
import HomeView from './HomeView';
import updatePageTitle from '../../actions/updatePageTitle';
import updateSelectedFeature from '../../actions/updateSelectedFeature';
import updateFeatures from '../../actions/updateFeatures';
import updateMagSorted from '../../actions/updateMagSorted';
import updateTimeSorted from '../../actions/updateTimeSorted';

function mapStateToProps(state) {
	return {
		title: state.metaData.title,
		features: state.features,
		magSorted: state.site.magSorted,
		timeSorted: state.site.timeSorted
	};
}

function mapDispatchToProps(dispatch) {
	return {
		sortFeatures: payload => {
			dispatch(updateFeatures(payload));
		},
		pageTitle: () => {
			dispatch(updatePageTitle('Profile'));
		},
		updateFeature: feature => {
			dispatch(updatePageTitle('Details'));
			dispatch(updateSelectedFeature(feature));
		},
		changeMagSorted: payload => {
			dispatch(updateMagSorted(payload));
		},
		changeTimeSorted: payload => {
			dispatch(updateTimeSorted(payload));
		}
	};
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeView);

export default Home;
