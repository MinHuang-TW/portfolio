import React from 'react';
import { SEO, Layout, Blogs } from '../components';
import { graphql } from 'gatsby';

const Blog = ({ data: { allStrapiBlogs: { nodes: blogs }}}) => (
  <Layout>
    <SEO title='Blog' description='my thoughts' />
    <section className='blog-page'>
      <Blogs blogs={blogs} title='blog' />
    </section>
  </Layout>
);

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        id
        slug
        description
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