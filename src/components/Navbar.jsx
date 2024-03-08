import React from 'react'
import logo from '../assets/LOGO.png'
import Menu from './Menu'
import MenuMovil from './MenuMovil.jsx'
import Login from './Login.jsx';

import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="cabecera">
    <div className='navBar'>
    <Link to={'/'} className="navbarLogo"><img src={logo} alt="" /></Link>
    <Menu/>
    <MenuMovil/>
    <Login/>
</div>

    </div>
  
  


  )
}

export default Navbar