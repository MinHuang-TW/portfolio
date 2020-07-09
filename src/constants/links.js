import React from 'react';
import { Link } from 'gatsby';

const data = [
  { id: 1, text: 'home', url: '/' },
  { id: 2, text: 'project', url: '/project/' },
  { id: 3, text: 'blog', url: '/blog/' },
  { id: 4, text: 'about', url: '/about/' },
  // { id: 5, text: 'contact', url: '/contact/' },
];

export default ({ styleClass }) => (
  <ul className={`page-links ${styleClass ? styleClass : ''}`}>
    {data.map(({ id, text, url }) => (
      <li key={id}>
        <Link to={url} activeClassName='nav-selected'>
          {text}
        </Link>
      </li>
    ))}
  </ul>
);