import React from 'react';
import styles from './styles.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div >
      <NavLink className={styles.dialog} to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;
