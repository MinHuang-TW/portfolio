import React from 'react';
import Links from '../constants/links';
// import SocialLinks from '../constants/socialLinks';
// import { FaTimes } from 'react-icons/fa';
import { MdClear } from 'react-icons/md';

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>
    <button className='close-btn' onClick={toggleSidebar}>
      {/* <FaTimes /> */}
      <MdClear />
    </button>
    <div className='side-container'>
      <Links styleClass={isOpen && 'sidebar-links'} />
      {/* <SocialLinks styleClass={isOpen && 'sidebar-icons'} /> */}
    </div>
  </aside>
);

export default Sidebar;