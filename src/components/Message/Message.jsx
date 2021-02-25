import React from 'react';
import styles from './styles.module.css';

const Message = (props) => {
  return (
    <div className={styles.massage}>{props.message}</div>
  )
}


export default Message;
