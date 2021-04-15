import React from 'react';
import styles from  './styles.module.css';
import Friends from "../Friends/Friends";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
  let friends = props.state.users.map(friend => <li className={styles.friends} key={friend.id}>
    <a className={styles.friend} href="#">
      <img className={styles.img} src={friend.src} alt=""/>
      {friend.name}
    </a>
  </li>);
    return (
      <div>
        <nav className={styles.nav}>
          <div className={styles.links}>
            <div className={styles.item}>
              <NavLink exact to='/' activeClassName={styles.active}>Profile</NavLink>
            </div>
            <div className={styles.item}>
              <NavLink to='/dialogs' activeClassName={styles.active}>Messages</NavLink>
            </div>
            <div className={styles.item}>
              <NavLink to='/news' activeClassName={styles.active}>News</NavLink>
            </div>
            <div className={styles.item}>
              <NavLink to='/music' activeClassName={styles.active}>Music</NavLink>
            </div>
            <div className={styles.item}>
              <NavLink to='/settings' activeClassName={styles.active}>Settings</NavLink>
            </div>
          </div>
          <h1 className={styles.friends}>Friends</h1>
          {friends}
        </nav>
    </div>
    )
}

export default Navbar;
