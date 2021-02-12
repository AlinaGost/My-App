import React from 'react';
import styles from './styles.module.css';


const Textarea = () => {
  return (
      <textarea placeholder={'ваша новость'} className={styles.textarea} type="text"/>
  )
}

export default Textarea;
