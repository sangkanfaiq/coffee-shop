import React from "react";
import styles from "./Partner.module.scss";

const Partner = () => {
  return (
    <div className={styles.partner}>
      <div className={styles.partnerTitle}>
        <h1>Our Partner</h1>
      </div>
      <div className={styles.partnerBox}>
        <div className={styles.sponsored}>
          <img src="partner/netflix.png" alt="" />
        </div>
        <div className={styles.sponsored}>
          <img src="partner/reddit.png" alt="" />
        </div>
        <div className={styles.sponsored}>
          <img src="partner/discord.png" alt="" />
        </div>
        <div className={styles.sponsored}>
          <img src="partner/spotify.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partner;
