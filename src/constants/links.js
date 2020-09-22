import React from 'react';
import data from '../constants/navigations';
import { Link } from 'gatsby';

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