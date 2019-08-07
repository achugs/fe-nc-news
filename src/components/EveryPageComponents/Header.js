import React, { Component } from 'react';
import styles from './Header.module.css';

class Header extends Component {
  state = {
    user: "weegembump"
  }
  render() {
    return (
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>
          NC Hughes News
      </h1>
        <p className={styles.userLogin}>User: {this.state.user}</p>
      </header>
    );
  }
}

export default Header;

