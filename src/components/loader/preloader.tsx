import React from "react";
import styles from "./loader.module.css";

export default function Preloader() {
  return (
    <div className={styles.preloader}>
      <div className={styles.text}>
        <span className={styles.letter}>V</span>
        <span className={styles.letter}>A</span>
        <span className={styles.letter}>R</span>
        <span className={styles.letter}>U</span>
        <span className={styles.letter}>N</span>
        <span className={styles.letter}>.</span>
        <span className={styles.letter}>.</span>
        <span className={styles.letter}>.</span>

      </div>
    </div>
  );
}
