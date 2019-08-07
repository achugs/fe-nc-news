import React from 'react';
import { Link } from "@reach/router"
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <Link to="/" className={styles.homeLink}>Home</Link>
      <Link to="/topics/football" className={styles.footballLink}> Football</Link>
      <Link to="/topics/coding" className={styles.codingLink}> Coding</Link>
      <Link to="/topics/cooking" className={styles.cookingLink}> Cooking</Link>
    </div>
  );
};

export default NavBar;