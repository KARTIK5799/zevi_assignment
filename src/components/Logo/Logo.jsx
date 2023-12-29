import React from 'react'
import LogoIcon from '../../assets/Zevi_logo.png';
import styles from './Logo.module.sass'

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
    <img src={LogoIcon} alt="Zeva" className={styles.logoImg} />
  </div>
  )
}

export default Logo
