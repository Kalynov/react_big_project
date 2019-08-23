import React from 'react';
import classes from './dialogs.module.css';
import { NavLink } from 'react-router-dom';


const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_item}>
        <div className={`${classes.dialog} ${classes.active}`}>
          <NavLink to = "/dialogs/1">Andrey</NavLink>
      </div>
        <div className={classes.dialog}>
        <NavLink to = "/dialogs/2">Valera</NavLink>
      </div>
        <div className={classes.dialog}>
        <NavLink to = "/dialogs/3">Valya</NavLink>
      </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>hi</div>
        <div className={classes.message}>Hellow</div>
        <div className={classes.message}>how are you?</div>
        <div className={classes.message}>i am fine) and you?</div>
        <div className={classes.message}>thanks, me to) </div>

      </div>
    </div>
  );
};
export default Dialogs;