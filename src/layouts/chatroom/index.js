import React from "react";
import styles from "./Chatroom.module.scss";
import { BiSearch } from "react-icons/bi";

const ChatroomLayout = () => {
  return (
    <div className={styles.bgChatroom}>
      <div className="container">
        <div className={`${styles.chatroomLayout} row`}>
          <div className={`${styles.layoutLeft} col-md-4`}>
            <div className={styles.searchBox}>
              <div className={styles.searchbar}>
                <input type="text" placeholder="Search Chat" />
                <BiSearch className={styles.searchIcon} />
              </div>
            </div>
            <h3>Choose a staff u want to talk with : </h3>
            <div className={styles.staffBox}>
              <div className={styles.staffBoxContent}>
                <img src="images/person4.png" alt="" />
                <div className={styles.staffInfo}>
                  <h4>Jason</h4>
                  <p>Hey, I’m Jason, Let’s talk and share what’s on your thoughts!</p>
                </div>
              </div>
              <div className={styles.horizontalLine}>
                <div className={styles.line}></div>
              </div>
              <div className={styles.staffBoxContent}>
                <img src="images/person5.png" alt="" />
                <div className={styles.staffInfo}>
                  <h4>Cheryn</h4>
                  <p>Hey, I’m Cheryn, can I help you? Just chat me if you have some trouble in ordering, happy shopping!</p>
                </div>
              </div>
              <div className={styles.horizontalLine}>
                <div className={styles.line}></div>
              </div>
              <div className={styles.staffBoxContent}>
                <img src="images/person6.png" alt="" />
                <div className={styles.staffInfo}>
                  <h4>Lou</h4>
                  <p>Hey, I’m Lou, I’ll here to help you, just talk to me and we solve the problme. Have a good day!</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.layoutRight} col-md-8`}>
            <h2>Jason</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatroomLayout;
