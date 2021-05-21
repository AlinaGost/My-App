import React from 'react';
import styles from './styles.module.css';
import Textarea from "../../Textarea/Textarea";
import Button from "../../Button/Button";
import Post from "./Post/Post";


const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let img = props.users.map(img => <img className={styles.img} src={img.src} alt=""/>)
  let postsElements = props.posts.map(post => <Post id={post.id} message={post.message} /> );

  let addPost = () => {
    props.addPost();
    props.updateNewPostText(' ');
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={styles.posts}>
      <div className={styles.title}>My posts</div>
      <Textarea change={onPostChange} value={props.newPostText} textValue={newPostElement} newPostText={props.newTextPost}  />
      <div className={styles.button}>
        <Button addEvent={addPost} title={'Send'} />
      </div>
      <div>
        {postsElements} {img}
      </div>

    </div>
  )
}

export default MyPosts;
