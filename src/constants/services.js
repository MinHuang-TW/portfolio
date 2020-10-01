import React from 'react';
import { FiCode, FiFigma, FiServer } from 'react-icons/fi';

export default [
  {
    id: 1,
    icon: <FiFigma className='service-icon' />,
    title: 'User Experience Design',
    text: `Through UX design techniques (e.g. journey mapping, user flow, wireframe, prototyping, usability test), I craft user-friendly interfaces providing enjoyable experiences to user.`,
  },
  {
    id: 2,
    icon: <FiCode className='service-icon' />,
    title: 'Front-end Development',
    text: `HTML5, CSS3 (SASS,CSS modules, Styled components), JS ES6 (React) are languages I mainly use, and I have experiences with Redux and static site generators (Gatsby) as well.`,
  },
  {
    id: 3,
    icon: <FiServer className='service-icon' />,
    title: 'Back-end Development',
    text: `Sometimes I build a back-end to complement the front-end with a few tools: express, node.js, MongoDB (MERNstack), CMS (strapi), graphQL, JWT, Netlify, Heroku, firebase.`,
  }
]
