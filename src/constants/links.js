import React, { Fragment } from 'react';
import data from '../constants/navigations';
import { Link } from 'gatsby';

export default ({ styleClass }) => (
  <ul className={`page-links ${styleClass ? styleClass : ''}`}>
    {data.map(({ id, text, url }) => (
      <Fragment key={id}>
        {text !== 'home' && (
          <li>
            <Link to={url} activeClassName='nav-selected' partiallyActive={true}>
              {text}
            </Link>
          </li>
        )}
      </Fragment>
    ))}
  </ul>
)