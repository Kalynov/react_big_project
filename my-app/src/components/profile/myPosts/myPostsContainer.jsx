import { addPostActionCreator, apdatePostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './myPosts';
import { connect } from 'react-redux';




let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updatePostText: (text)=>{
      dispatch(apdatePostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps )(MyPosts)

export default MyPostsContainer;