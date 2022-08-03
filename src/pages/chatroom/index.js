import React from "react";
import ChatroomLayout from "../../layouts/chatroom";
import Head from 'next/head'
import Footer from '../../components/footer'
import NavbarisLogin from "../../components";

const Chatroom = () => {
  return (
    <>
      <Head>
        <title>Chatroom - Coffee Shop</title>
      </Head>
      <NavbarisLogin />
      <ChatroomLayout />
      <Footer />
    </>
  );
};

export default Chatroom;
