import React from 'react';
import { Layout, SEO, TitleAnchored } from '../components';
import { graphql, Link } from 'gatsby';
import Image from "gatsby-image"
import { DiscussionEmbed } from 'disqus-react';
import { BsArrowRight } from 'react-icons/bs';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const shortcodes = { TitleAnchored, BsArrowRight };

const BlogTemplate = ({
  data: {
    post: {
      id,
      slug,
      body,
      frontmatter: { title, image, categories, date, description },
    },
  },
  pageContext: { previous, next },
}) => {
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: {
      url: `https://minhuang.netlify.app/blog/${slug}`,
      identifier: id,
      title,
    },
  };

  return (
    <Layout>
      <SEO title={title} description={description} />
      <div className='blog-block section-center content-container flyIn-bottom'>
        <Image className='blog-main' fluid={image.childImageSharp.fluid} />
  
        <section className='blog-template'>
          <h2>{title}</h2>
          <p>{date.toUpperCase()} - {categories[0].toUpperCase()}</p>
  
          <article className='blog-content'>
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
          </article>

          <div className='blog-btns'>
            {previous ? (
              <Link className='btn center-btn prev-btn' to={previous.fields.slug}>
                <p>Previous</p>
                {previous.frontmatter.title}
              </Link>
            ) : null}

            {next ? (
              <Link className='btn center-btn next-btn' to={next.fields.slug}>
                <p>Next</p>
                {next.frontmatter.title}
              </Link>
            ) : null}
          </div>

          <DiscussionEmbed {...disqusConfig} />
        </section>
      </div>
    </Layout>
  )
};

export const query = graphql`
  query GetSingleBlog($id: String) {
    post: mdx(id: { eq: $id }) {
      id
      slug
      body
      frontmatter {
        title
        categories
        date(formatString: "MMMM D, YYYY")
        description
        image {
          childImageSharp {
            fluid(maxWidth: 900, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default BlogTemplate;