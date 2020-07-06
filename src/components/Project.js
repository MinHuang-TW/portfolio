import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

const Project = ({ description, title, slug, stack, image }) => (
    <article className='project'>
      {image && (
        <Image fluid={image.childImageSharp.fluid} className='project-img' />
      )}
      <Link className='project-info' to={`/project/${slug}`}>
        <h3 style={{ fontSize: 32 }}>{title}</h3>
        <p className='project-desc'>{description}</p>
        <div className='project-stack'>
          {stack.map(({ id, language }) => (<span key={id}>{language}</span>))}
        </div>
      </Link>
    </article>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project;