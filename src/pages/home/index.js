import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import HomeLayout from "../../layouts/home";
import Head from 'next/head'

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Coffee Shop</title>
      </Head>
      <Navbar />
      <HomeLayout />
      <Footer />
    </>
  );
};

export default Homepage;
