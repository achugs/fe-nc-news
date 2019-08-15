import React from "react";
import styles from "./Errors.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";

const ErrorHandlingDisplay = error => {
  return (
    <div>
      <h3 className={styles.ghost}>
        <FontAwesomeIcon icon={faGhost} />
      </h3>
      <p className={styles.error}>
        ERROR {error.status} {error.msg}
      </p>
    </div>
  );
};

export default ErrorHandlingDisplay;
