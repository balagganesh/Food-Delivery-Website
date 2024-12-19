import React, { useState } from 'react'
import "./Navbar.css";
import { assets } from "../../assets/assets"
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [menu, setmenu] = useState();



  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo' />
      <ul className="navbar-menu">
        <Link to="/"onClick={() => setmenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
        <a href='#Explore-Menu' onClick={() => setmenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setmenu("Mobile-App")} className={menu === "Mobile-App" ? "active" : ""}>Mobile-App</a>
        <a href='#footer' onClick={() => setmenu("Contact us")} className={menu === "Contact us" ? "active" : ""}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
