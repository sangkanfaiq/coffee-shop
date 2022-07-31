import React from "react";
import styles from "./Signin.module.scss";
import Link from "next/link";

const SigninLayout = () => {
  return (
    <>
      <div className={`${styles.signinLayout} row`}>
        <div className={`${styles.leftSI} col-md-6`}>
            <div className={styles.bgTransparent}></div>
        </div>
        <div className={`${styles.rightSI} col-md-6`}>
          <div className={styles.rightBoxSI}>
            <div className={styles.logo}>
              <Link href="/">
                <div className={styles.logoImg}>
                  <img src="/logo/coffee.svg" alt="logo" title="Coffee" />
                  <h1>Coffee Shop</h1>
                </div>
              </Link>
              <div className={styles.logoButton}>
                <Link href="/auth/signup">
                  <button>Sign Up</button>
                </Link>
              </div>
            </div>
            <h2>Sign In</h2>
            <form>
              <label htmlFor="">Email Address</label>
              <br />
              <input
                type="text"
                placeholder="Enter your email address"
                required
              />
              <br />
              <label htmlFor="">Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                required
              />
              <br />
              <div className={styles.forgotPass}>
                <Link href='/auth/forgotpassword'>Forgot Password?</Link>
              </div>
              <button type="submit">Sign In</button>
              <br />
              <div className={styles.withGoogle}>
                <span>
                  <img src="/icon/google.svg" alt="google" title="Google"/>
                </span>
                Sign in with Google
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninLayout;
