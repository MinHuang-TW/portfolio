import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

const Project = ({
  slug,
  frontmatter: { title, projectBrief, categories, projectStack, image },
  index,
}) => (
  <Link className='project fadeIn-top' to={`/project/${slug}`}>
    {image && (
      <Image 
        className='project-img' 
        fluid={image.childImageSharp.fluid} 
        loading={!index && 'eager'}
        fadeIn={!index && false}
      />
    )}
    <div className='project-info'>
      <div>
        {categories.map(category => (
          <p key={category} className='project-category'>
            [{category}]
          </p>
        ))}
        <h3>{title}</h3>
        <p className='project-desc'>{projectBrief}</p>
      </div>
      <div className='project-stack'>
        {projectStack.map(stack => (
          <span key={stack}>{stack}</span>
        ))}
      </div>
    </div>
  </Link>
);

Project.propTypes = {
  slug: PropTypes.string.isRequired,
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    projectBrief: PropTypes.string.isRequired,
    projectStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
}

export default Project;