import React from 'react';
import classes from './post.module.css';


const Post = (props) => (
  <div className = {classes.item}>
    <img alt='' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Cameronavatar.jpg/220px-Cameronavatar.jpg'/>
    {props.message}
  </div>
);
export default Post;