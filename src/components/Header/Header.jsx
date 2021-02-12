import React from 'react';
import styles from './styles.module.css';
import logo from './../../img/logo.png';

const Header = () => {
    return <header className={styles.header}>
      <a href="#">
        <img src={logo}  alt='' />
      </a>
    </header>
}

export default Header;
