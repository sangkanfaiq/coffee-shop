import React from 'react'
import styles from '../../../../styles/home/Home.module.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link'

const Banner = () => {
  return (
    <div className={styles.banner}>
        <div className={styles.bannerContent}>
            <h1>Start Your Day with Coffee and Good Meals</h1>
            <p>We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</p>
            <Link href='/product'><button>Get Started <span><ArrowForwardIcon className={styles.bannerIcon}/></span></button></Link>
        </div>
    </div>
  )
}

export default Banner