import React from 'react';
import styles from './styles.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "../DialogItem/DialogItem";
import Message from "../Message/Message";

const Dialogs = () => {

  let dialogs = [
    {id: 1, name: 'Natalia'},
    {id: 2, name: 'Roman'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Dmitriy'},
    {id: 5, name: 'Anastasia'},
    {id: 6, name: 'Elena'}
  ]

  let messages = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'Hello!'},
    {id: 3, message: 'How is your?'},
    {id: 4, message: 'How are you?'}
  ]

  let dialogElements = dialogs.map((dialog) => <DialogItem id={dialog.id} name={dialog.name} /> );
  let messageElement = messages.map((message) =>  <Message id={message.id} message={message.message}/>)

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
