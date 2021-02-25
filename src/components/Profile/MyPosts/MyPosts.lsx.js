import React from 'react';
import styles from './styles.module.css';
import Textarea from "../../Textarea/Textarea";
import Button from "../../Button/Button";
import Post from "./Post/Post";

let posts = [
  {id: 1, message: 'Важная новость!!!Наиважейшая новость!!!'},
  {id: 2, message: 'Новость!!!Пост!!!Репост!'},
  {id: 3, message: 'Новость!!!Пост!!!Репост! Важная новость!!!Наиважейшая новость!!!'},
  {id: 4, message: 'Новость!!!Пост!!!Репост! Новость!!!Пост!!!Репост!'}
]

let postsElements = posts.map(post =>  <Post id={post.id} message={post.message} />)

const MyPosts = () => {
  return (
    <div className={styles.posts}>
      <div className={styles.title}>My posts</div>
      <Textarea />
      <div className={styles.button}>
        <Button />
      </div>
      {postsElements}
    </div>
  )
}

export default MyPosts;
