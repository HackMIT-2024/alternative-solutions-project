import React from "react";
import styles from "../_styles/Module.module.css";

const LaunchTitle = () => {
  return (
    <h1 className={styles.h1}>
      <span>start your </span>
      <span className={styles.sustain}>sustain</span>
      <span>ability journey</span>
    </h1>
  );
};

export default LaunchTitle;
