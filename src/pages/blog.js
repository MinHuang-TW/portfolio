import React from 'react';
import { SEO, Layout, Blogs } from '../components';
import { graphql } from 'gatsby';

const Blog = ({ 
  data: { 
    allStrapiBlogs: { nodes: blogs },
    allStrapiBlogs: { totalCount },
  }
}) => (
  <Layout>
    <SEO title='Blog' description='my thoughts' />
    <section className='blog-page'>
      <Blogs blogs={blogs} total={totalCount} title='blog' />
    </section>
  </Layout>
);

export const query = graphql`
  {
    allStrapiBlogs (sort: {fields: date, order: DESC}) {
      totalCount,
      nodes {
        id
        slug
        description
        content
        date(formatString: "MMMM D, YYYY")
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Blog;