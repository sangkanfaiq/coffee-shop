import React from 'react'
import styles from './Visit.module.scss'

const Visit = () => {
  return (
    <div className={styles.visit}>
        <div className={styles.visitTitle}>
            <h1>Visit Our Store in the Spot on the Map Below</h1>
            <p>See our store in every city on the spot and spen your good day there. See you soon!</p>
        </div>
        <div className={styles.visitImg}>
            <img src="images/global.png" alt="" />
        </div>
    </div>
  )
}

export default Visit