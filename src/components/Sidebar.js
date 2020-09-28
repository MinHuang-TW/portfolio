import React from 'react';
import Links from '../constants/links';
import { MdClear } from 'react-icons/md';

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>
    <button 
      className='close-btn' 
      onClick={toggleSidebar} 
      aria-label='close button'
    >
      <MdClear />
    </button>
    <div className='side-container'>
      <Links styleClass={isOpen && 'sidebar-links'} />
    </div>
  </aside>
);

export default Sidebar;