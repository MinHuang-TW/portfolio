import React from 'react';
import { IoIosLink } from 'react-icons/io';

const TitleAnchored = ({ children, gutterTop }) => (
  <a
    href={`#${children}`}
    className='anchored-title'
    style={{ marginTop: gutterTop && 0 }}
  >
    <IoIosLink className='anchored-icon' size={16} />
    <h3 id={children} className='anchored-text'>
      {children}
    </h3>
  </a>
);

export default TitleAnchored;