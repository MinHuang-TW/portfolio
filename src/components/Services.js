import React from 'react';
import Title from './Title';
import services from '../constants/services';

const Services = () => (
  <section id='skillset' className='section'>
    <div
      data-sal='fade'
      data-sal-duration={600}
      data-sal-easing='ease-in'
    >
      <Title title='Skillsets' />
    </div>
    <div className='section-center services-center'>
      {services.map(({ id, icon, title, text }, index) => (
        <article
          key={id}
          className='service'
          data-sal='slide-up'
          data-sal-duration={600}
          data-sal-delay={200 * index}
          data-sal-easing='ease-in'
        >
          {icon}
          <h3>{title}</h3>
          <div className='underline' />
          <p>{text}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Services;