import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.scss";
import {GoThreeBars} from 'react-icons/go'

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className="container">
          <div className={styles.logo}>
            <Link href='/'>
              <div className={styles.imgbox}>
                  <img src="logo/coffee.svg" alt="logo" title="Coffee Shop"/>
                  <h1>Coffee Shop</h1>
              </div>
            </Link>
            <div className={styles.navmenu}>
                <Link href="/"><div className={`${styles.navlinks} ${styles.active}`}>Home</div></Link>
                <Link href="/product"><div className={styles.navlinks}>Product</div></Link>
                <Link href="/#"><div className={styles.navlinks}>Your Cart</div></Link>
                <Link href="/#"><div className={styles.navlinks}>History</div></Link>
            </div>
            <div className={styles.navbutton}>
                <Link href='/auth/signin'><button>Sign In</button></Link>
                <Link href='/auth/signup'><button>Sign Up</button></Link>
            </div>
            <div className={styles.navIcon}>
              <GoThreeBars className={styles.icon}/>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
