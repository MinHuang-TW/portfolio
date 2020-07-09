import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

const Project = ({ description, title, slug, stack, image, categories }) => (
    <Link className='project' to={`/project/${slug}`}>
      {image && (
        <Image fluid={image.childImageSharp.fluid} className='project-img' />
      )}
      <div className='project-info'>
        <div>
          {categories.map(({ id, category }) => (
            <p key={id} className='project-category'>
              [{category}]
            </p>
          ))}
          <h3>{title}</h3>
          <p className='project-desc'>{description}</p>
        </div>
        <div className='project-stack'>
          {stack.map(({ id, language }) => (<span key={id}>{language}</span>))}
        </div>
      </div>
    </Link>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project;