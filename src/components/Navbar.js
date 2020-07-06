import React from 'react';
// import logo from '../assets/logo.svg';
import PageLinks from '../constants/links';
import { MdMenu } from 'react-icons/md';
import { Link } from 'gatsby';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'><h3>MIN HUANG</h3></Link>
          {/* <img src={logo} alt='logo' /> */}
          <button type='button' className='toggle-btn' onClick={toggleSidebar}>
            <MdMenu />
          </button>
        </div>
        <PageLinks styleClass='nav-links' />
      </div>
    </nav>
  )
}

export default Navbar;