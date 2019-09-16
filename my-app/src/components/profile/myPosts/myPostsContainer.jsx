import React from 'react';
import { addPostActionCreator, apdatePostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './myPosts';



const MyPostsContainer = (props) => {

  let state = props.store.getState();

  let addPost = () =>{
    props.store.dispatch(addPostActionCreator())
  };

  let updatePostText = (text) =>{
    props.store.dispatch(apdatePostTextActionCreator(text));
  }

  return (<MyPosts 
    updatePostText = {updatePostText} 
    addPost = {addPost} 
    posts = {state.profilePage.postsData}
    newPostText = {state.profilePage.newPostText}
  />)
};
export default MyPostsContainer;