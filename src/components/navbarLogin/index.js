import React from 'react'
import styles from './NLogin.module.scss'
import Link from 'next/link'
import { GoThreeBars } from 'react-icons/go'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'

const NavbarLogin = () => {
  return (
    <nav className={styles.navbarLogin}>
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
          <div className={styles.navprofile}>
              <div className={styles.searchBar}>
                <input type="text" placeholder='Search here...'/>
                <BiSearch className={styles.searchIcon}/>
              </div>
              <div className={styles.chat}>
                <Link href='/chatroom'><HiOutlineChatAlt2 className={styles.chatIcon}/></Link>
                <span>1</span>
              </div>
              <div className={styles.profileImage}>
                <Link href='/#'><img src="icon/profile.svg" alt="" /></Link>
              </div>
          </div>
          <div className={styles.navIcon}>
            <GoThreeBars className={styles.icon}/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarLogin