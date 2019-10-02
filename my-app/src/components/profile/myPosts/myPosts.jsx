import React from 'react';
import classes from './myPosts.module.css';
import Post from './post/post';



const MyPosts = (props) => {

  let posts = 
    props.profilePage.postsData.map(post => <Post message = {post.message}/>);

  const newPostElement = React.createRef();
  let onAddPost = () =>{
    props.addPost();
  };

  let onUpdatePostText = () =>{
    let text = newPostElement.current.value
    props.updatePostText(text);
  }

  return (
    <div className={classes.profile}>
      <div>
        My Posts
         <div>
          <textarea ref={ newPostElement }
            cols="30"
            rows="5"
            value = {props.profilePage.newPostText}
            onChange = { onUpdatePostText }/>
        </div>
        <div>
          <button
            onClick={onAddPost}>
              add post
          </button>
        </div>
        <div className={classes.posts}>
          {posts}
        </div>
      </div>
    </div>
  );
};
export default MyPosts;