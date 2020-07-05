import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
// import { FaGithubSquare, FaShareSquare } from 'react-icons/fa';

const Project = ({ description, title, slug, github, stack, url, image }) => (
    <article className='project'>
      {image && (
        <Image fluid={image.childImageSharp.fluid} className='project-img' />
      )}
      <Link className='project-info' to={`/project/${slug}`}>
        <h3>{title}</h3>
        <p className='project-desc'>{description}</p>
        <div className='project-stack'>
          {stack.map(({ id, language }) => (
            <span key={id}>{language}</span>
          ))}
        </div>
        {/* <div className='project-link'>
          <a href={github} target='_blank' rel='noopener noreferrer'>
            <FaGithubSquare className='project-icon' />
          </a>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            <FaShareSquare className='project-icon' />
          </a>
        </div> */}
      </Link>
    </article>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  // github: PropTypes.string.isRequired,
  // url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project;