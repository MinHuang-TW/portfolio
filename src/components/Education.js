import React from 'react';
import Title from './Title';

const degree = [
  {
    title: 'Master of Design for Interaction',
    uni: 'Delft University of Technology',
    city: 'Delft, Netherlands',
  },
  {
    title: 'Bachelor of Industrial Design',
    uni: 'National Cheng Kung University',
    city: 'Tainan, Taiwan',
  },
];

const Education = () => (
  <section id='education' className='section'>
    <Title title='education & certification' />

    <div className='section-center education-layout'>
      <div>
        {degree.map(({ title, uni, city }, index) => (
          <article key={index}>
            <h3 className={index !== 0 ? 'gap-top' : null}>{title}</h3>
            <p>{uni}</p>
            <p>{city}</p>
          </article>
        ))}
      </div>

      <article>
        <h3>Responsive Web Design Certification,</h3>
        <h3>JS Algorithms & Data Structures Certification</h3>
        <p>freeCodeCamp</p>
      </article>
    </div>
  </section>
);

export default Education;