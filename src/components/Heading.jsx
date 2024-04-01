import React from "react";
import styles from "./Heading.module.css"

const Heading = () => {
  return (
    <div className={styles.heading}>
      <h2 className={styles.wlcmTxt}>Welcome to</h2>
      <h2 className={styles.headingTxt}><span className={styles.highlightTxt}>Admin</span> Portal</h2>
    </div>
  );
};

export default Heading;
