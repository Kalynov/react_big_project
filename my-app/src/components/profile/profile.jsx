import React from 'react';
import classes from './profile.module.css';
import MyPosts from './myPosts/myPosts';


const Profile = () =>(
    <div className={classes.profile}>
       <div>
        <img src = "https://asiamountains.net/upload/slide/slide-1960x857-07.jpg"></img>
       </div>
       <div>
         ava + description
       </div>
       <MyPosts/>
     </div>
);
export default Profile;