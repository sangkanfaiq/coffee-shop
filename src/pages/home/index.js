import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import HomeLayout from "../../layouts/home";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <HomeLayout />
      <Footer />
    </>
  );
};

export default Homepage;
