import React from 'react';
import logo from '../assets/logo.svg';
import PageLinks from '../constants/links';
import { MdMenu } from 'react-icons/md';
import { Link } from 'gatsby';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <div className='nav-logo'>
            <Link to='/'>
              <img src={logo} alt='logo' />
            </Link>
            <h3>MIN HUANG</h3>
          </div>

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