import { connect } from 'react-redux';
import DetailView from './DetailView';

function mapStateToProps(state) {
	return {
		title: state.selectedFeature.length > 0 ? state.selectedFeature[0].properties.title : '',
		feature: state.selectedFeature.length > 0 ? state.selectedFeature[0] : {}
	};
}

function mapDispatchToProps(dispatch) {
	return {};
}

const Detail = connect(mapStateToProps, mapDispatchToProps)(DetailView);

export default Detail;
