import React from 'react';
import classes from './profile.module.css';
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