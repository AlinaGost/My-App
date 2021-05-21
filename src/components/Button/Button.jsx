import React from 'react';
import styles from './styles.module.css';
import classNames from "classnames";

const Button = (props) => {
  return (
    <button onClick={props.addEvent} className={classNames(styles.button, props.addClass)}>{props.title}</button>
  )
}

export default Button;
