import { Head } from "next/document";
import React from "react";
import styles from "../../styles/home/Home.module.scss";
import About from "./components/about";
import Banner from "./components/banner";
import Center from "./components/center";
import Favourite from "./components/favourite";
import Partner from "./components/partner";
import Testimony from "./components/testimony";
import Visit from "./components/visit";

const HomeLayout = () => {
  return (
    <>
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
      </div>
    </>
  );
};

export default HomeLayout;
