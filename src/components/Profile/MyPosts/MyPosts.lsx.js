import React from 'react';
import styles from './styles.module.css';
import Textarea from "../../Textarea/Textarea";
import Button from "../../Button/Button";
import Post from "./Post/Post";


const MyPosts = (props) => {

  let img = props.users.map(img => <img className={styles.img} src={img.src} alt=""/>)
  let postsElements = props.posts.map(post => <Post id={post.id} message={post.message} /> );

  return (
    <div className={styles.posts}>
      <div className={styles.title}>My posts</div>
      <Textarea />
      <div className={styles.button}>
        <Button />
      </div>
      <div>
        {postsElements} {img}
      </div>

    </div>
  )
}

export default MyPosts;
