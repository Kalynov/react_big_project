import React from 'react';
import classes from './dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
      <div className={`${classes.dialog}`}>
        <NavLink to={`/dialogs/${props.id}`} activeClassName={classes.active}>{props.name}</NavLink>
      </div>
    );
  },

  Message = (props) => {
    return (
      <div className={classes.message}>{props.message}</div>
    );
  },
  Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Valera" },
        { id: 3, name: "Valya" },
        { id: 4, name: "Andrey" },
        { id: 5, name: "Artem" },
        { id: 6, name: "Sasha" }
      ],
      messagesData = [
        { id: 1, message: "hi how are you" },
        { id: 2, message: "hi" },
        { id: 3, message: "i am fine" },
        { id: 4, message: "yoo" },
        { id: 5, message: "wazzzap" },
        { id: 6, message: "omg" }
      ],
      dialogsElements =
        dialogsData.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id}/>),

      messagesElement =
        messagesData.map(message => <Message message = {message.message}/>);


    return (
      <div className={classes.dialogs}>
        <div className={classes.dialogs_item}>
        {dialogsElements}
        </div>
        <div className={classes.messages}>
          {messagesElement}
        </div>
      </div>
    );
  };
export default Dialogs;