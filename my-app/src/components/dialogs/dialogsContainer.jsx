import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import Dialogs from './dialogs';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateMessage: (text)=>{
      dispatch(updateNewMessageBodyCreator(text))
    },
    addMessage: () => {
      dispatch(sendMessageCreator());
    }
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps )(Dialogs)


export default DialogsContainer;