import React from "react";
import styles from "../../styles/home/Home.module.scss";
import About from "./components/about";
import Banner from "./components/banner";
import Center from "./components/center";
import Favourite from "./components/favourite";
import Partner from "./components/partner";
import Promo from "./components/promo";
import Testimony from "./components/testimony";
import Visit from "./components/visit";
import Head from 'next/head'

const HomeLayout = () => {
  return (
    <>
      <Head>
        <title>Home - Coffee Shop</title>
      </Head>
      <div className={styles.homepage}>
        <div className={styles.backgroundBlack}>
          <div className="container">
            <Banner />
            <Center />
          </div>
        </div>
      </div>
      <div className="container">
        <About />
        <Favourite />
        <Visit />
        <Partner />
        <Testimony />
        <Promo />
      </div>
    </>
  );
};

export default HomeLayout;
