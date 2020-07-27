import React from 'react';

const FigureSection = ({ src, caption }) => (
  <figure>
    <img src={src} alt={caption} />
    <figcaption>{caption}</figcaption>
  </figure>
);

export default FigureSection;