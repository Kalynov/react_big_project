import React from 'react';
import classes from './dialogs.module.css';
import DialogItem from './dialogsItem/dialogsItem';
import Message from './message/message';

const  Dialogs = (props) => {
  const dialogsElements =
      props.dialogsPage.dialogsData.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id}/>),
    messagesElement =
      props.dialogsPage.messagesData.map(message => <Message message = {message.message}/>),
    newMyMessage = React.createRef(),
    addMessage = () => {
      const text = newMyMessage.current.value;
      // eslint-disable-next-line no-alert
      alert(text);
    };


  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_item}>
      {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElement}
        <div>
          <textarea ref = {newMyMessage} cols="30" rows="10"></textarea>
          <button onClick = {addMessage}>submit</button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;