import React from "react";
import Footer from "../../components/footer";
import HomeLayout from "../../layouts/home";
import Head from 'next/head'
import NavbarisLogin from "../../components";

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Coffee Shop</title>
      </Head>
      <NavbarisLogin/>
      <HomeLayout />
      <Footer />
    </>
  );
};

export default Homepage;
