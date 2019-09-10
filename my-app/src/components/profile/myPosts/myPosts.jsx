import React from 'react';
import classes from './myPosts.module.css';
import Post from './post/post';


const MyPosts = (props) => {

  let posts = 
    props.postsData.postsData.map(post => <Post message = {post.message}/>);

  const newPostElement = React.createRef();
  let addPost = () =>{
    props.dispatch({type:'ADD-POST'})
     /* props.addPost(); */
  };

  let apdatePostText = () =>{
    let text = newPostElement.current.value
    props.dispatch({
      type:'UPDATE-NEW-POST-TEXT',
      text:text,
    })
  }

  return (
    <div className={classes.profile}>
      <div>
        My Posts
         <div>
          <textarea ref={ newPostElement }
            cols="30"
            rows="5"
            value = {props.postsData.newPostText.text}
            onChange = { apdatePostText }/>
        </div>
        <div>
          <button
            onClick={addPost}>
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