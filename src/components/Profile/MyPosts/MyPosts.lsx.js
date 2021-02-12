import React from 'react';
import styles from './styles.module.css';
import Textarea from "../../Textarea/Textarea";
import Button from "../../Button/button";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={styles.posts}>
      <div className={styles.title}>My posts</div>
      <Textarea />
      <div className={styles.button}>
        <Button />
      </div>

      <Post message={'Важная новость!!!Наиважейшая новость!!!'} />
      <Post message='Новость!!!Пост!!!Репост!!' />

    </div>
  )
}

export default MyPosts;
