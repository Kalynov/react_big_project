import React from 'react';
import classes from './profile.module.css';
import MyPosts from './myPosts/myPosts';
import ProfileInfo from './profileInfo/profileInfo';


const Profile = (props) =>(
    <div>
       <ProfileInfo/>
       <MyPosts 
        postsData = { props.profilePage }
        apdatePostText = {props.apdatePostText}
        addPost = {props.addPost}/>
     </div>
);
export default Profile;