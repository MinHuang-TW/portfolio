import React from 'react';
import Title from './Title';
import services from '../constants/services';

const Services = () => (
  <section id='skillsets' className='section'>
    <Title title='Skillsets' />
    <div className='section-center services-center'>
      {services.map(({ id, icon, title, texts }) => (
        <article key={id} className='service'>
          {icon}
          <h3>{title}</h3>
          <div className='underline' />
          <ul>
            {texts.map((text, idx) => (<li key={idx}>{text}</li>))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default Services;