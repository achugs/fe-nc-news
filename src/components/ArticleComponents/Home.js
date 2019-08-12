import React from 'react';
import { Link } from "@reach/router"
import styles from './Home.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFutbol,
  faLaptopCode,
  faHotdog
} from "@fortawesome/free-solid-svg-icons";



const Home = () => {
  return (
    <div className={styles.articleHome}>
      <h1 className={styles.topics}>Level types</h1>
      <div className={styles.articleTopics}>
        <Link to='/topics/football' className={styles.footballLink}>
          <FontAwesomeIcon icon={faFutbol} />
          {"  "}Football {"  "}
          <FontAwesomeIcon icon={faFutbol} /></Link>
        <Link to='/topics/coding' className={styles.codingLink}>
          <FontAwesomeIcon icon={faLaptopCode} />
          {"  "}Coding{"  "}
          <FontAwesomeIcon icon={faLaptopCode} />
        </Link>
        <Link to='/topics/cooking' className={styles.cookingLink}>
          <FontAwesomeIcon icon={faHotdog} />
          {"  "} Cooking {"  "}
          <FontAwesomeIcon icon={faHotdog} /></Link>
      </div>

    </div>
  );
}

export default Home;
