import React from 'react';
import styles from './styles.module.css';
import DialogItem from "../DialogItem/DialogItem";
import Message from "../Message/Message";


const Dialogs = (props) => {

  let dialogElements = props.state.dialogs.map((dialog) => <DialogItem id={dialog.id} name={dialog.name} /> );
  let messageElement = props.state.messages.map((message) =>  <Message id={message.id} message={message.message}/>)

  return (
    <div>
      <div className={styles.dialogs}>
        <div className={styles.items}>
          {dialogElements}
        </div>
        <div className={styles.messages}>
          {messageElement}
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
