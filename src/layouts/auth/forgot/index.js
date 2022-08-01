import React from "react";
import styles from './Forgot.module.scss'
import Link from 'next/link'

const ForgotLayout = () => {
  return (
    <>
      <div className={`${styles.forgotLayout} row`}>
        <div className={`${styles.leftFP} col-md-6`}>
          <div className={styles.bgTransparent}></div>
        </div>
        <div className={`${styles.rightFP} col-md-6`}>
          <div className={styles.rightBoxFP}>
            <div className={styles.logo}>
              <Link href="/">
                <div className={styles.logoImg}>
                  <img src="/logo/coffee.svg" alt="logo" title="Coffee" />
                  <h1>Coffee Shop</h1>
                </div>
              </Link>
            </div>
            <h2>Forgot your password?</h2>
            <p>Don’t worry, we got your back!</p>
            <form>
              <label htmlFor="">Email Address</label>
              <br />
              <input
                type="text"
                placeholder="Enter your email address"
                required
              />
              <button type="submit">Send</button>
              <br />
              <div className={styles.resendStatus}>
                <Link href='/#'>Click here </Link>if you didn’t receive any link in 2 minutes
                <br />
                <span>01:52</span>
              </div>
              <div className={styles.resendLink}>
                <button>Resend Link</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotLayout;
