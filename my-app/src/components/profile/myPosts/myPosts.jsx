import React from 'react';
import classes from './myPosts.module.css';
import Post from './post/post';


const MyPosts = () => (
    <div className={classes.profile}>
       <div>
         My Posts
         <div>
           New post
         </div>
         <div className = {classes.posts}>
          <Post message = 'hi, how are you?'/>
          <Post message = 'its my first post'/>
          <Post message = 'you good boy'/>
          <Post message = 'you to! Lol)'/>
         </div>
       </div>
     </div>
);
export default MyPosts;