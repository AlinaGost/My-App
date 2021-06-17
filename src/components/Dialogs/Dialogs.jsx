import React from 'react';
import styles from './styles.module.css';
import DialogItem from "../DialogItem/DialogItem";
import Message from "../Message/Message";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialog-reducer";


const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let newMessageElement = React.createRef();
  let dialogElements = state.dialogs.map((dialog) => <DialogItem id={dialog.id} name={dialog.name} /> );
  let messageElement = state.messages.map((message) =>  <Message id={message.id} message={message.message}/>);
  let newMessageBody = state.newMessageBody;

  let newMessage = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
    <div>
      <div className={styles.dialogs}>
        <div className={styles.items}>
          {dialogElements}
        </div>

        <div className={styles.messages}>
          <div className={styles.messageElement}>
            {messageElement}
          </div>
          <div className={styles.messageInput}>
            <Textarea value={newMessageBody} textValue={newMessageElement} addClass={styles.textarea} change={onNewMessageChange}/>
            <Button addEvent={newMessage} addClass={styles.button} title={'Отправить'} />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Dialogs;
