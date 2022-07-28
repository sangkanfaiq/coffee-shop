import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../../styles/navbar/Navbar.module.scss";

const Navbar = () => {
  return (
    <>
      <Head>
        <title>Home - Coffee Shop</title>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <nav className={styles.navbar}>
        <div className="container">
          <div className={styles.logo}>
            <div className={styles.imgbox}>
                <img src="logo/coffee.svg" alt="logo" />
                <h1>Coffee Shop</h1>
            </div>
            <div className={styles.navmenu}>
                <Link href="/#"><div className={`${styles.navlinks} ${styles.active}`}>Home</div></Link>
                <Link href="/#"><div className={styles.navlinks}>Product</div></Link>
                <Link href="/#"><div className={styles.navlinks}>Your Cart</div></Link>
                <Link href="/#"><div className={styles.navlinks}>History</div></Link>
            </div>
            <div className={styles.navbutton}>
                <Link href='/#'><button>Sign In</button></Link>
                <Link href='/#'><button>Sign Up</button></Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
