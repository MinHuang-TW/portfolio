import React from 'react';
import { FiCode, FiFigma, FiServer } from 'react-icons/fi';

export default [
  {
    id: 1,
    icon: <FiFigma className='service-icon' />,
    title: 'User Experience Design',
    texts: [
      'Research (Contextmapping, focus group, persona)',
      'Design (Wireframing, user flow, visual & interaction design, digital prototyping)',
      'Usability & field testing'
    ],
  },
  {
    id: 2,
    icon: <FiCode className='service-icon' />,
    title: 'Front-end Development',
    texts: [
      'HTML5',
      'CSS3 (CSS modules, Styled components, SASS)', 
      'Javascript (ES6, ES7, React)',
      'State Management (Redux)',
      'SSG (Gatsby.js + GraphQL)',
    ],
  },
  {
    id: 3,
    icon: <FiServer className='service-icon' />,
    title: 'Back-end Development',
    texts: [
      'Framework (Express, Node.js)', 
      'Database (MongoDB, Firebase)', 
      'Headless CMS (Strapi)', 
      'Authorization (JWT)',
      'Deployment (Netlify, Heroku, Firebase cloud)'
    ],
  }
]