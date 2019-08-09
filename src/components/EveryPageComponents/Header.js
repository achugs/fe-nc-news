import React from 'react';
import styles from './Header.module.css';



const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>
        NC Hughes News
      </h1>
      <h6 className={styles.welcomeUser}> Welcome: {props.username}</h6>
    </header>
  );
}

export default Header;

