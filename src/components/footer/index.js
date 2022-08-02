import React from 'react'
import styles from './Footer.module.scss'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={`${styles.footer} container`}>
        <div className={`${styles.footerContent} row`}>
            <div className={`${styles.footerDetails} col-md-6`}>
                <Link href='/'>
                    <div className={styles.footerLogo}>
                        <img src='/logo/coffee.svg' alt="logo" title="Coffee Shop"/>
                        <h4>Coffee Shop</h4>
                    </div>
                </Link>
                <div className={styles.footerAbout}>
                    <p>Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
                </div>
                <div className={styles.footerSocial}>
                    <div className={styles.socialBox}>
                        <Link href='https://www.facebook.com/'><div><FaFacebookF className={styles.socialIcon}/></div></Link>
                    </div>
                    <div className={styles.socialBox}>
                        <Link href='https://twitter.com/'><div><FaTwitter className={styles.socialIcon}/></div></Link>
                    </div>
                    <div className={styles.socialBox}>
                        <Link href='https://www.instagram.com/'><div><FaInstagram className={styles.socialIcon}/></div></Link>
                    </div>
                </div>
                <div className={styles.footerCopyright}>©2022 Coffee Store. All Right Reserved</div>
            </div>
            <div className={`${styles.footerMenu} col-md-6`}>
                <div className={styles.footerMenuDetails}>
                    <h4>Product</h4>
                    <p>Download</p>
                    <p>Pricing</p>
                    <p>Locations</p>
                    <p>Countries</p>
                    <p>Blog</p>
                </div>
                <div className={styles.footerMenuDetails}>
                    <h4>Engage</h4>
                    <p>Coffe Shop ?</p>
                    <p>F A Q</p>
                    <p>About Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer