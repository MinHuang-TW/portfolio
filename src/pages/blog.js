import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Blogs from '../components/Blogs';

const Blog = ({ data: { allStrapiBlogs: { nodes: blogs }}}) => (
  <Layout>
    <section className='blog-page'>
      <Blogs blogs={blogs} title='blog' />
    </section>
  </Layout>
);

export default Blog;

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