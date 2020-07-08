import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

const Blog = ({ id, title, description, image, date, category, slug }) => (
  <Link key={id} className='blog' to={`/blog/${slug}`}>
    {image && (
      <Image fluid={image.childImageSharp.fluid} className='blog-img' />
    )}
    <div className='blog-card'>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className='blog-footer'>
        <p className='blog-date'>{date}</p>
        <p className='blog-category'>{category}</p>
      </div>
    </div>
  </Link>
);

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired, 
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired, 
}

export default Blog;