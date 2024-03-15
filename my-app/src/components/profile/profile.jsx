import React from 'react';
// eslint-disable-next-line no-unused-vars
import classes from './profile.module.css';
// eslint-disable-next-line no-unused-vars
import MyPosts from './myPosts/myPosts';
import ProfileInfo from './profileInfo/profileInfo';
import MyPostsContainer from './myPosts/myPostsContainer';


const Profile = (props) =>(
    <div>
       <ProfileInfo/>
       <MyPostsContainer
         store = {props.store} 
        />
     </div>
);
export default Profile;