import React, { Fragment } from 'react';
import Title from './Title';

const Education = () => {
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

  return (
    <section className='section-small'>
      <Title title='education' />
      <div className='section-center education-layout'>
        <div>
          {degree.map(({ title, uni, city }, index) => (
            <Fragment key={index}>
              <h3 className={index !== 0 ? 'gap-top' : null}>{title}</h3>
              <p>{uni}</p>
              <p>{city}</p>
            </Fragment>
          ))}
        </div>

        <div>
          <h3>Responsive Web Design Certification,</h3>
          <h3>JS Algorithms & Data Structures Certification</h3>
          <p>freeCodeCamp</p>
        </div>
      </div>
    </section>
  )
};

export default Education;