import React from "react";
import styles from "./Center.module.scss";
import { BsPersonFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Center = () => {
  return (
    <div className={styles.center}>
      <div className={styles.centerBox}>
        <div className={styles.boxIcon}>
          <BsPersonFill className={styles.icon} />
        </div>
        <div className={styles.centerTitle}>
          <span>90+</span>
          Staff
        </div>
      </div>
      <div className={styles.centerBox}>
        <div className={styles.boxIcon}>
          <MdLocationOn className={styles.icon} />
        </div>
        <div className={styles.centerTitle}>
          <span>30+</span>
          Stores
        </div>
      </div>
      <div className={styles.centerBox}>
        <div className={styles.boxIcon}>
          <FavoriteBorderIcon className={styles.icon} />
        </div>
        <div className={styles.centerTitle}>
          <span>800+</span>
          Costumers
        </div>
      </div>
    </div>
  );
};

export default Center;
