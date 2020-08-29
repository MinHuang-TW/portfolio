import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Blog = ({
  id,
  slug,
  frontmatter: { title, description, image, date, categories },
}) => (
  <Link key={id} className="blog fadeIn" to={`/blog/${slug}`}>
    {image && (
      <Image className="blog-img" fluid={image.childImageSharp.fluid} />
    )}
    <div className="blog-card">
      <div className="blog-head">
        <p className="blog-date">{date}</p>
        {categories.map((category, index) => (
          <p className="blog-category" key={index}>
            {category}
          </p>
        ))}
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </Link>
)

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
}

export default Blog
