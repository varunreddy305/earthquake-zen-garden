import { connect } from 'react-redux';
import FolderView from './FolderView';

function mapStateToProps(state) {
	return {
		avatar: state.profile.avatarImage
	};
}

function mapDispatchToProps(dispatch) {
	return {};
}

const Folder = connect(mapStateToProps, mapDispatchToProps)(FolderView);

export default Folder;
