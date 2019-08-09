import React from 'react';
import { Link } from "@reach/router"
import styles from './NavBar.module.css';


const NavBar = (props) => {
  console.log(props.username)
  return (
    <div className={styles.navBar}>
      <Link to="/" className={styles.homeLink}>Home</Link>
      <Link to="/topics/football" className={styles.footballLink}> Football </Link>
      <Link to="/topics/coding" className={styles.codingLink}> Coding</Link>
      <Link to="/topics/cooking" className={styles.cookingLink}> Cooking</Link>
      <h6 className={styles.welcomeUser}> Welcome: {props.username}</h6>
    </div>
  );
};

export default NavBar;