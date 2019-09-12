import React from 'react';
import classes from './dialogs.module.css';
import DialogItem from './dialogsItem/dialogsItem';
import Message from './message/message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';


const  Dialogs = (props) => {

  const dialogsElements =
    props.dialogsPage.dialogsData.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id}/>);
    
  const messagesElement =
    props.dialogsPage.messagesData.map(message => <Message message = {message.message}/>);
  
  const newMessageBody = props.dialogsPage.newMessageBody;
    
  const newMyMessage = React.createRef();
    
  const addMessage = () => {
    props.dispatch(sendMessageCreator());
  };

  const updateMessage = (e) => {
    
    const text = e.target.value;
    props.dispatch(updateNewMessageBodyCreator(text))
  };


  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_item}>
      {dialogsElements}
      </div>
      <div className={classes.messages}>
        <div>{messagesElement}</div>
        <div>
          <div><textarea  value = {newMessageBody} ref = {newMyMessage} cols="30" rows="10" onChange = {updateMessage }></textarea></div>
          <div><button onClick = {addMessage}>submit</button></div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;