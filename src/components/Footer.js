import React from 'react';
import SocialLinks from '../constants/socialLinks';
import data from '../constants/navigations';
import { Link } from 'gatsby';
import { FiMail } from 'react-icons/fi';

const Footer = () => (
  <footer className='footer'>
    <div className='section-center'>
      <div className='footer-container'>
        <div className='footer-link-block'>
          <h3 className='footer-subtitle'>Navigation</h3>
          <ul className={`page-links footer-links`}>
            {data.map(({ id, text, url }) => (
              <li key={id}>
                <Link to={url} activeClassName='footer-link-selected' partiallyActive={text !== 'home'}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='footer-media-block'>
          <h3 className='footer-subtitle'>Contact Me</h3>
          <SocialLinks />
          <div className='mail-block'>
            <FiMail className='service-icon' />
            <h4>h.min719@gmail.com</h4>
          </div>
        </div>

        <div className='footer-form-block'>
          <h3 id='myMsg' className='footer-subtitle'>Send Me a Message</h3>
          <form
            action='https://formspree.io/mzbjjrrd'
            method='POST'
            target='_blank'
            rel='noopener noreferrer'
            className='footer-form'
          >
            <textarea 
              rows='5' 
              name='message' 
              placeholder='message' 
              aria-labelledby='myMsg' 
            />
            <div>
              <input 
                type='email' 
                name='email' 
                placeholder='your email' 
                aria-labelledby='myMsg' 
              />
              <button type='submit' className='btn footer-btn'>
                submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <small>
        &copy; {new Date().getFullYear()} Min Huang. All rights reserved
      </small>
    </div>
  </footer>
);

export default Footer;