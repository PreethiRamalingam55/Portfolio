import React from "react";
import styles from "./loader.module.css";
export default function Preloader() {
  return (
    <div className={styles.preloader}>
      <div className="text-6xl capitalize font-bold leading-loose tracking-[10px]">
        <span className={styles.loading__letter}>V</span>
        <span className={styles.loading__letter}>A</span>
        <span className={styles.loading__letter}>R</span>
        <span className={styles.loading__letter}>U</span>
        <span className={styles.loading__letter}>N</span>
        <span className={styles.loading__letter}>.</span>
        <span className={styles.loading__letter}>.</span>
        <span className={styles.loading__letter}>.</span>
      </div>
    </div>
  );
}
