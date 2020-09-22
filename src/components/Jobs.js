import React, { useState } from 'react';
import Title from './Title';
import { AiOutlineRight } from 'react-icons/ai';
import { graphql, useStaticQuery } from 'gatsby';

const Jobs = () => {
  const data = useStaticQuery(query);
  const { allStrapiJobs: { nodes: jobs }} = data;
  const [selected, setSelected] = useState(0);
  const { country, date, position, descriptions } = jobs[selected];
  
  return (
    <section className='section-small'>
      <Title title='work experiences' />
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((job, index) => (
            <button 
              key={job.strapiId} 
              className={`job-btn ${index === selected && 'active-btn'}`}
              onClick={() => setSelected(index)}
            >
              {job.company}
            </button>
          ))}
        </div>
        <article className='job-info'>
          <h3>{position}</h3>
          <p className='job-date'>{date}</p>
          <p>{country}</p>
          {descriptions.map(({ id, list }) => (
            <div key={id} className='job-desc'>
              <AiOutlineRight className='job-icon' />
              <p>{list}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  )
};

const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        strapiId
        company
        country
        date
        position
        descriptions {
          id
          list
        }
      }
    }
  }
`

export default Jobs;