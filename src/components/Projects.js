import React from 'react';
import Project from './Project';
import { Link } from 'gatsby';

const Projects = ({ projects, showLink, gutterTop }) => (
  <section 
    className='section projects' 
    style={{ paddingTop: gutterTop ? '' : '2.5rem' }}
  >
    <div className='section-center'>
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
    {showLink && (
      <Link 
        to='/project/' 
        className='btn center-btn projects-btn' 
      >
        view all projects
      </Link>
    )}
  </section>
);

export default Projects;