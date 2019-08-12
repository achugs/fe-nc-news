import React from 'react';
import styles from './Header.module.css';



const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>
        NC Hughes News
      </h1>
      <p className={styles.welcomeUser}> Welcome: {props.username}</p>
    </header>
  );
}

export default Header;

