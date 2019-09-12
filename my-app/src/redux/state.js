import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

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
      newMessageBody: "",
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


  subscribe(observer) {
    this._renderFullTree = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);

    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
    this._renderFullTree(this._state);
  }
};




export default store;