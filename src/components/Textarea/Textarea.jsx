import React from 'react';
import styles from './styles.module.css';
import classNames from "classnames";


const Textarea = (props) => {
  return (
      <textarea ref={props.textValue} onChange={props.change} value={props.value} className={classNames(styles.textarea, props.addClass) } type="text"/>
  )
}

export default Textarea;
