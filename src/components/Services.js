import React from 'react';
import services from '../constants/services';

const Services = () => (
  <section className='section-small'>
    <div className='section-center services-center'>
      {services.map(service => {
        const { id, icon, title, text } = service;
        return (
          <article key={id} className='service fadeIn-services'>
            {icon}
            <h4>{title}</h4>
            <div className='underline' />
            <p>{text}</p>
          </article>
        )
      })}
    </div>
  </section>
);

export default Services;