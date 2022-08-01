import React from "react";
import styles from "./Testimony.module.scss";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Testimony = () => {
  return (
    <div className={styles.testimony}>
      <div className={styles.testiTitle}>
        <h1>Loved by Thousands of Happy Customer</h1>
        <p>
          These are the stories of our customers who have visited us with great
          pleasure.
        </p>
      </div>
      <div className={styles.testiBox}>
        <div className={`${styles.testiCard} ${styles.active}`}>
          <div className={styles.testiDetails}>
            <div className={styles.testiImg}>
              <img src="images/person1.png" alt="" />
            </div>
            <div className={styles.testiInfo}>
              <div className={styles.testiPeople}>
                <h4>Viezh Robert</h4>
                <p>Warsaw, Poland</p>
              </div>
              <div className={styles.testiRating}>
                4.5
                <StarIcon className={styles.testiIcon} />
              </div>
            </div>
          </div>
          <div className={styles.testiContent}>
            <p>
              “Wow... I am very happy to spend my whole day here. the Wi-fi is
              good, and the coffee and meals tho. I like it here!! Very
              recommended!
            </p>
          </div>
        </div>
        <div className={styles.testiCard}>
          <div className={styles.testiDetails}>
            <div className={styles.testiImg}>
              <img src="images/person2.png" alt="" />
            </div>
            <div className={styles.testiInfo}>
              <div className={styles.testiPeople}>
                <h4>Yessica Christy</h4>
                <p>Shanxi, China</p>
              </div>
              <div className={styles.testiRating}>
                4.5
                <StarIcon className={styles.testiIcon} />
              </div>
            </div>
          </div>
          <div className={styles.testiContent}>
            <p>
              “I like it because I like to travel far and still can make my day
              better just by drinking their Hazelnut Latte
            </p>
          </div>
        </div>
        <div className={styles.testiCard}>
          <div className={styles.testiDetails}>
            <div className={styles.testiImg}>
              <img src="images/person3.png" alt="" />
            </div>
            <div className={styles.testiInfo}>
              <div className={styles.testiPeople}>
                <h4>Kim Young Jou</h4>
                <p>Seoul, South Korea </p>
              </div>
              <div className={styles.testiRating}>
                4.5
                <StarIcon className={styles.testiIcon} />
              </div>
            </div>
          </div>
          <div className={styles.testiContent}>
            <p>
              “This is very unusual for my taste, I haven’t liked coffee before
              but their coffee is the best! and yup, you have to order the
              chicken wings, the best in town!
            </p>
          </div>
        </div>
      </div>
      <div className={styles.testiPaginate}>
        <div className={styles.testiDots}>
          <div className={`${styles.testiDot} ${styles.active}`}></div>
          <div className={styles.testiDot}></div>
          <div className={styles.testiDot}></div>
          <div className={styles.testiDot}></div>
        </div>
        <div className={styles.testiNavigate}>
          <div className={styles.navigateRound}>
            <ArrowBackIcon className={styles.navigateIcon}/>
          </div>
          <div className={`${styles.navigateRound} ${styles.active}`}>
            <ArrowForwardIcon className={styles.navigateIcon}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
