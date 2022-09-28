import React from "react";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header role="header" className={styles.headerContainer}>
      <div className={styles.headerLeft}>SNAP!</div>
      <div className={styles.headerRight}>

      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      </div>
    </header>
  );
};
