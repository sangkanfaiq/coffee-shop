import styles from "./Signup.module.scss";
import Link from "next/link";

const Signuplayout = () => {
  return (
    <div className={`${styles.signupLayout} row`}>
      <div className={`${styles.leftSU} col-md-6`}>
        <div className={styles.bgTransparent}></div>
      </div>
      <div className={`${styles.rightSU} col-md-6`}>
        <div className={styles.rightBoxSU}>
          <div className={styles.logo}>
            <Link href="/">
              <div className={styles.logoImg}>
                <img src="/logo/coffee.svg" alt="logo" title="Coffee" />
                <h1>Coffee Shop</h1>
              </div>
            </Link>
            <div className={styles.logoButton}>
              <Link href="/auth/signin">
                <button>Sign In</button>
              </Link>
            </div>
          </div>
          <h2>Sign Up</h2>
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
            <input type="password" placeholder="Enter your password" required />
            <br />
            <label htmlFor="">Phone number</label>
            <br />
            <input placeholder="Enter your phone number" required />
            <br />
            <button type="submit">Sign Up</button>
            <br />
            <div className={styles.withGoogle}>
              <span>
                <img src="/icon/google.svg" alt="google" />
              </span>
              Sign up with Google
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signuplayout;
