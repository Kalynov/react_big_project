
let store = {
  _state: {
    dialogPage: {
      dialogsData: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Valera" },
        { id: 3, name: "Valya" },
        { id: 4, name: "Andrey" },
        { id: 5, name: "Artem" },
        { id: 6, name: "Sasha" }
      ],
      messagesData: [
        { id: 1, message: "hi how are you" },
        { id: 2, message: "hi" },
        { id: 3, message: "i am fine" },
        { id: 4, message: "yoo" },
        { id: 5, message: "wazzzap" },
        { id: 6, message: "omg" }
      ],
    },
    profilePage: {
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
  },

  getState() {
    return this._state;
  },

  _renderFullTree() {
    console.log("render");
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText.text,
    };
    this._state.profilePage.postsData.push(newPost);
    this._renderFullTree(this._state);
  },

  apdatePostText(text) {
    this._state.profilePage.newPostText.text = text;
    this._renderFullTree(this._state);
  },

  subscribe(observer) {
    this._renderFullTree = observer;
  },

  dispatch(action) {
    switch (action.type){
      case 'ADD-POST' :{
        this.addPost()
      }
      break;
      case 'UPDATE-NEW-POST-TEXT': {
        this.apdatePostText(action.text)
      }
      break;
      default: console.error('this type action is not defined in dispatch')
    }
    

  }
};

export default store;