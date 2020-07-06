import React from 'react';
import SocialLinks from '../constants/socialLinks';

const Footer = () => (
  <footer className='footer'>
    {/* <div> */}
      <h4>
        copyright {new Date().getFullYear()} &copy; Min Huang. All rights reserved.
      </h4>
      <SocialLinks styleClass='footer-links' />
    {/* </div> */}
  </footer>
)

export default Footer;