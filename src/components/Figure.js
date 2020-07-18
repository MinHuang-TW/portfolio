import React from 'react';

const Figure = ({ figures }) => (
  <div className='figure-container'>
    {figures.map(({ src, caption }) => (
      <figure key={caption}>
        <img src={src} alt={caption} />
        <figcaption>{caption}</figcaption>
      </figure>
    ))}
  </div>
);

export default Figure;