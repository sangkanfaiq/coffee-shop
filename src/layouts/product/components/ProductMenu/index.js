import React from 'react'
import styles from './PMenu.module.scss'
import Link from 'next/link'

const ProductMenu = () => {
  return (
    <div className={styles.productMenu}>
        <div className={styles.menuDetails}>
            <Link href='/#'><div className={`${styles.menuItem} ${styles.active}`}>Favorite Product</div></Link>
            <Link href='/#'><div className={styles.menuItem}>Coffee</div></Link>
            <Link href='/#'><div className={styles.menuItem}>Non Coffee</div></Link>
            <Link href='/#'><div className={styles.menuItem}>Foods</div></Link>
            <Link href='/#'><div className={styles.menuItem}>Add-on</div></Link>
        </div>
    </div>
  )
}

export default ProductMenu