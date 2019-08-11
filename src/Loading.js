import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRing } from "@fortawesome/free-solid-svg-icons";
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div>
      <h3 className={styles.ring}>
        <FontAwesomeIcon icon={faRing} />
      </h3>
      <p className={styles.loading}>Loading...</p>
    </div>
  );
};

export default Loading;