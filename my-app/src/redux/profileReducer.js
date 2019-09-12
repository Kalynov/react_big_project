
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData: [
    { id: 1, message: "hi, how are you?" },
    { id: 2, message: "its my first post" },
    { id: 3, message: "i am fine" },
    { id: 4, message: "yoo" },
    { id: 5, message: "you good boy" },
    { id: 6, message: "you to! Lol)" }
  ],
  newPostText: {
    text: 'new Post',
  }
}

const profileReducer = (state =initialState, action) => {

    switch (action.type){
      case ADD_POST :{
        let newPost = {
          id: 5,
          message: state.newPostText.text,
        };
        state.postsData.push(newPost);
      }
      return state;
      case UPDATE_NEW_POST_TEXT: {
        state.newPostText.text = action.text;
      }
      return state;
      default: return state;
    }

  
}

export const addPostActionCreator = () =>({type: ADD_POST});

export const apdatePostTextActionCreator = (text) =>({
  type: UPDATE_NEW_POST_TEXT,
  text:text
})


export default profileReducer;