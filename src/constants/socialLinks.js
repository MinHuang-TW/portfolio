import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
// import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi';

const data = [
  {
    id: 1,
    icon: <FiMail className='social-icon' />,
    url: 'mailto:h.min719@gmail.com',
  },
  {
    id: 2,
    icon: <FiLinkedin className='social-icon' />,
    url: 'https://www.linkedin.com/in/minHuang-twn/',
  },
  {
    id: 3,
    icon: <FiGithub className='social-icon' />,
    url: 'https://github.com/MinHuang-TW',
  },
  // {
  //   id: 3,
  //   icon: <FiInstagram className='social-icon' />,
  //   url: 'https://www.instagram.com/tuetme/',
  // },
  // {
  //   id: 4,
  //   icon: <FiTwitter className='social-icon' />,
  //   url: 'https://twitter.com/MinHuang_TW',
  // },
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
          aria-label={url}
        >
          {icon}
        </a>
      </li>
    ))}
  </ul>
);