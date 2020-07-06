import React from 'react';
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  // FiMail,
  FiTwitter,
} from 'react-icons/fi';

const data = [
  {
    id: 1,
    icon: <FiGithub className='social-icon' />,
    url: 'https://github.com/MinHuang-TW',
  },
  {
    id: 2,
    icon: <FiLinkedin className='social-icon' />,
    url: 'https://www.twitter.com',
  },
  {
    id: 3,
    icon: <FiInstagram className='social-icon' />,
    url: 'https://www.instagram.com/tuetme/',
  },
  {
    id: 4,
    icon: <FiTwitter className='social-icon' />,
    url: 'https://twitter.com/MinHuang_TW',
  },
];

export default ({ styleClass }) => (
  <ul className={`social-links ${styleClass ? styleClass : ''}`}>
    {data.map(({ id, icon, url }) => (
      <li key={id}>
        <a 
          href={url} 
          className='social-link' 
          target='_blank' 
          rel='noopener noreferrer'
        >
          {icon}
        </a>
      </li>
    ))}
  </ul>
);