import React from 'react';
import styles from './styles.module.css';
import DialogItem from "../DialogItem/DialogItem";
import Message from "../Message/Message";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";


const Dialogs = (props) => {

  let newMessageElement = React.createRef();
  let dialogElements = props.state.dialogs.map((dialog) => <DialogItem id={dialog.id} name={dialog.name} /> );
  let messageElement = props.state.messages.map((message) =>  <Message id={message.id} message={message.message}/>)

  let newMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };

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
            <Textarea textValue={newMessageElement} addClass={styles.textarea} />
            <Button addEvent={newMessage} addClass={styles.button} title={'Отправить'} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dialogs;
