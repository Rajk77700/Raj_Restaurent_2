import React from 'react'
import { useState } from "react";
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './Navbar.css'
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';
import {GiHamburgerMenu } from 'react-icons/gi'
import Footer from './Footer';


function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className='mainNav'>
        <div className='logo'>
        <Link to={'/'}>
          <h2>
            <span>R</span>aj_
            <span>R</span>estaurant
          </h2></Link>
        </div>

        {/* Nave-Menu Links */}
        <div  className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menuLink"
          }>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            {/* <li><NavLink to='/services'>Services</NavLink></li> */}
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <li><NavLink to='/restaurant'>Menu</NavLink></li>
            <li><NavLink to='/reservation'>Reservation</NavLink></li>
          </ul>
        </div>
         {/* Social media links */}
        <div className='socialMedia'>
          <ul className="social-media-desktop">
            <li>
              <a href='https://www.youtube.com' target='raj' className='youtube'><FaYoutubeSquare/></a>
            </li>
            <li>
              <a href='https://www.facebook.com' target='raj' className='facebook'><FaFacebookSquare/></a>
            </li>
            <li>
              <a href='https://www.instagram.com' target='raj' className='instagram'><FaInstagramSquare/></a>
            </li>
          </ul>
          {/* Hamburger Menu */}
          <div className='hamburgerMenu'>
          <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar