import React from 'react';
import Layout from '../components/Layout';
import Blogs from '../components/Blogs';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';

const Blog = ({ data: { allStrapiBlogs: { nodes: blogs }}}) => (
  <Layout>
    <SEO title='Blog' description='my thoughts' />
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