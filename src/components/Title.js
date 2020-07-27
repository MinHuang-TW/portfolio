import React from 'react';

const Title = ({ title, styleClass }) => (
  <div className={`section-title ${styleClass ? styleClass : ''}`}>
    <h2>{title || 'default title'}</h2>
  </div>
);

export default Title;