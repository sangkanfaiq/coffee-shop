import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <>
      <div className={`${styles.about} ${"row"}`}>
        <div className={`${styles.aboutImg} ${"col-md-6"}`}>
          <img src="images/about.png" alt="images" />
        </div>
        <div className="col-md-6">
          <div className={styles.aboutContent}>
            <h1>We Provide Good Coffee and Healthy Meals</h1>
            <h3>
              You can explore the menu that we provide with fun and have their
              own taste and make your day better.
            </h3>
            <div className={styles.checkRoundBox}>
              <div className={styles.checkRound}>
                <img src="icon/checkRound.svg" alt="check" />
                <p>High quality beans</p>
              </div>
              <div className={styles.checkRound}>
                <img src="icon/checkRound.svg" alt="check" />
                <p>Healthy meals, you can request the ingredients</p>
              </div>
              <div className={styles.checkRound}>
                <img src="icon/checkRound.svg" alt="check" />
                <p>Chat with our staff to get better experience for ordering</p>
              </div>
              <div className={styles.checkRound}>
                <img src="icon/checkRound.svg" alt="check" />
                <p>Free member card with a minimum purchase of IDR 200.000.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
