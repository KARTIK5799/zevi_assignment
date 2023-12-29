import React from 'react'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import styles from './NavBar.module.sass'
import { useSearch } from '../../contexts/SearchContaxt'
import { Link } from 'react-router-dom'


const NavBar = ({place}) => {
  const {searchTerm,setSearchTerm}=useSearch();
  if(place==="search"){
    return (
      <div className={styles.navBarSearch}>
     <Link to='/'>
     <Logo/>
     </Link>
      </div>
    )
  }if(place==="product"){
    return (
      <div className={styles.navBarProduct}>
        <Search productStyle={true} setSearchTerm={setSearchTerm}/>
        <Link to='/'>
     <Logo/>
     </Link>
      </div>
    )
  }
 
}

export default NavBar
