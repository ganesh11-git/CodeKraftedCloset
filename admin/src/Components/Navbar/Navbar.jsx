import React from 'react'
import './Navbar.css'
import nav_logo from '../../assets/Logo1.jpeg'
import nav_profile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={nav_logo} alt="" className='nav-logo'/>
        <img src={nav_profile} alt="" className='nav-profile'/>
    </div>
  )
}

export default Navbar