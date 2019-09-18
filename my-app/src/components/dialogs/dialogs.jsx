import React from 'react';
import classes from './dialogs.module.css';
import DialogItem from './dialogsItem/dialogsItem';
import Message from './message/message';


const  Dialogs = (props) => {

  const dialogsElements =
    props.dialogs.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id}/>);
    
  const messagesElement =
    props.messages.map(message => <Message message = {message.message}/>);
  
  const newMessageBody = props.newMessageText;
    
  const newMyMessage = React.createRef();
    
  const addMessage = () => {
    props.addMessage();
  };

  const updateMessage = (e) => {
    
    const text = e.target.value;
    props.updateMessage(text)
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