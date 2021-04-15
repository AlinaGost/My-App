import React from 'react';
import styles from './styles.module.css';
import avatar_1 from '../../../../img/avatar_1.jpg';

const Post = (props) => {
  return(
    <div className={styles.post}>
      <a href="#" className={styles.title}>{props.message}</a>
    </div>
  )
}

export default Post;
