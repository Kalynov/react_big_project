import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import Dialogs from './dialogs';


const  DialogsContainer = (props) => {

  let state = props.store.getState();
    
  const addMessage = () => {
    props.store.dispatch(sendMessageCreator());
  };

  const updateMessage = (text) => {
    props.store.dispatch(updateNewMessageBodyCreator(text))
  };


  return (<Dialogs 
    updateMessage = {updateMessage}
    addMessage = {addMessage}
    dialogs = {state.dialogPage.dialogsData}
    messages = {state.dialogPage.messagesData}
    newMessageText = {state.dialogPage.newMessageBody}
    
  />);
};
export default DialogsContainer;