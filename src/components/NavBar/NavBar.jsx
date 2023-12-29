import React from 'react'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import styles from './NavBar.module.css'


const NavBar = ({place}) => {
  if(place==="search"){
    return (
      <div className={styles.navBarSearch}>
      <Logo/>
      </div>
    )
  }if(place==="product"){
    return (
      <div className={styles.navBarProduct}>
        <Search productStyle={true}/>
      <Logo/>
      </div>
    )
  }
 
}

export default NavBar
