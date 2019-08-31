import React from 'react';
import classes from './profile.module.css';
import MyPosts from './myPosts/myPosts';
import ProfileInfo from './profileInfo/profileInfo';


const Profile = () =>(
    <div>
       <ProfileInfo/>
       <MyPosts/>
     </div>
);
export default Profile;