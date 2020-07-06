import React from 'react';
import Title from './Title';
import Project from './Project';
import { Link } from 'gatsby';

const Projects = ({ projects, title, showLink }) => (
  <section className='section projects'>
    {title && (<Title title={title} />)}
    <div className='section-center projects-center'>
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
    {showLink && (
      <Link 
        to='/project' 
        className='btn center-btn' 
        style={{ width: '16rem' }}
      >
        view all projects
      </Link>
    )}
  </section>
);

export default Projects;