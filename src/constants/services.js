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
      'Usability & Field testing'
    ],
  },
  {
    id: 2,
    icon: <FiCode className='service-icon' />,
    title: 'Front-end Development',
    texts: [
      'HTML5',
      'CSS3 (SASS, CSS modules, Styled components)', 
      'Javascript (ES6, ES7, React)',
      'State management(Redux, Saga)',
      'SSG (Gatsby + GraphQL)',
    ],
  },
  {
    id: 3,
    icon: <FiServer className='service-icon' />,
    title: 'Back-end Development',
    texts: [
      'Node.js (Express)', 
      'Database (MongoDB, Firebase)', 
      'Headless CMS (Strapi)', 
      'Authorization (JWT)',
      'Deployment (Netlify, Heroku, Firebase cloud)'
    ],
  }
]