import React from 'react';
import styles from './styles.module.css';
import UserInfo from "../UserInfo/UserInfo";
import MyPosts from "./MyPosts/MyPosts.lsx";


const Profile = () => {
    return (
        <div>
          <div>
            <img className={styles.img} src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt='' />
          </div>

          <div className={styles.content}>
            <UserInfo name={'Dmitriy K'} date={'25.02.1995'} city={'London'} education={'GFR NH 5456'} website={'vk'}/>
            <MyPosts />
          </div>
        </div>
      )
}

export default Profile;
