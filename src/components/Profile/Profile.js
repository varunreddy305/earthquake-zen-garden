import { connect } from 'react-redux';
import ProfileView from './ProfileView';

function mapStateToProps(state) {
	console.log(state);
	return {
		avatar: state.profile.avatarImage,
		firstName: state.profile.firstName,
		lastName: state.profile.lastName,
		phone: state.profile.phone,
		email: state.profile.email,
		bio: state.profile.bio
	};
}

function mapDispatchToProps(dispatch) {
	return {};
}

const Profile = connect(mapStateToProps, mapDispatchToProps)(ProfileView);

export default Profile;
