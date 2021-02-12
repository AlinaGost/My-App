import React from 'react';
import styles from './styles.module.css';
import user from './../../../../img/user.jpg';

const Post = (props) => {
  return(
    <div className={styles.post}>
      <a href="#">
        <img className={styles.img} src={user} alt=""/>
      </a>
      <a href="#" className={styles.title}>{props.message}</a>
    </div>
  )
}

export default Post;
