import React from "react";
import styles from ".//styles.module.css";
import avatar from "../../img/avatar.jpg";


const UserInfo = (props) => {
  return (
    <div className={styles.userInfo}>
      <img src={avatar} className={styles.avatar} alt=""/>

      <div className={styles.description}>
        <div className={styles.name}>{props.name}</div>

        <div>Date of Birth: {props.date}</div>
        <div>City: {props.city}</div>
        <div>Education: {props.education}</div>
        <div>Website: {props.website}</div>
      </div>
    </div>
  )
}

export default UserInfo;
