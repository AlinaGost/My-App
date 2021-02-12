import React from "react";
import styles from ".//styles.module.css";
import avatar from "../../img/avatar.jpg";


const UserInfo = () => {
  return (
    <div className={styles.userInfo}>
      <img src={avatar} className={styles.avatar} alt=""/>

      <div className={styles.description}>
        <div className={styles.name}>Dmitriy K.</div>

        <div>Date of Birth:25.02</div>
        <div>City: London</div>
        <div>Education: BNG №523</div>
        <div>Website: vk</div>
      </div>
    </div>
  )
}

export default UserInfo;
