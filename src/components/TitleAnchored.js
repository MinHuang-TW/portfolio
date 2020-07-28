import React from 'react';
import { IoIosLink } from 'react-icons/io';

const TitleAnchored = ({ styleClass, children }) => (
  <a
    href={`#${children}`}
    className={`anchored-title ${styleClass ? styleClass : ''}`}
  >
    <IoIosLink className='anchored-icon' size={16} />
    <h3 id={children} className='anchored-text'>
      {children}
    </h3>
  </a>
);

export default TitleAnchored;