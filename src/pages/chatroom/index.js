import React from "react";
import NavbarLogin from "../../components/navbarLogin";
import ChatroomLayout from "../../layouts/chatroom";
import Head from 'next/head'
import Footer from '../../components/footer'

const Chatroom = () => {
  return (
    <>
      <Head>
        <title>Chatroom - Coffee Shop</title>
      </Head>
      <NavbarLogin />
      <ChatroomLayout />
      <Footer />
    </>
  );
};

export default Chatroom;
