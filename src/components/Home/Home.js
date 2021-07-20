import { connect } from 'react-redux';
import HomeView from './HomeView';
import updatePageTitle from '../../actions/updatePageTitle';
import updateSelectedFeature from '../../actions/updateSelectedFeature';
import updateFeatures from '../../actions/updateFeatures';

function mapStateToProps(state) {
	return {
		title: state.metaData.title,
		features: state.features
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
		}
	};
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeView);

export default Home;
