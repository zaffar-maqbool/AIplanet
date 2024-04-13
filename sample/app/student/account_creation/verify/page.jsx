"use client"
import styles from '../page.module.css'
import React from 'react'
import MobileVerification from '../subComponents/MobileVerification/VerifyMobile'
import LeftPanel from '../../GlobalComponents/LeftPanel/LeftPanel'

const Verifypage = () => {
  return (
    <main >
      <div className={styles.main}>
        <LeftPanel/>
        <MobileVerification/>
      </div>
    </main>
    
  )
}

export default Verifypage