import React from 'react'
import styles from './Promo.module.scss'
import Link from 'next/link'

const Promo = () => {
  return (
    <div className={styles.promo}>
        <div className={styles.promoBox}>
            <div className={styles.promoContent}>
                <h1>Check our promo today!</h1>
                <p>Let's see the deals and pick yours!</p>
            </div>
            <div className={styles.promoButton}>
                <Link href='/#'><button>See Promo</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Promo