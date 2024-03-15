import React from 'react';
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