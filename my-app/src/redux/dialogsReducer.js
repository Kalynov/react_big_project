const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type){
  
    case UPDATE_NEW_MESSAGE_BODY: {
      let stateCopy = {
        ...state,
        newMessageBody: action.body,
      };
      return stateCopy;
    }
    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      let stateCopy = {
        ...state,
        newMessageBody:  '',
        messagesData: [...state.messagesData, { id: 6, message: body }]
      };
      return stateCopy;
    }    
    default: return state;
  }
}

export const sendMessageCreator = () =>({type: SEND_MESSAGE});
 
export const updateNewMessageBodyCreator = (body) =>({
  type: UPDATE_NEW_MESSAGE_BODY,
  body:body
})

export default dialogsReducer;