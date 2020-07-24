import React from 'react';
import { SEO, Layout, Blogs } from '../components';
import { graphql } from 'gatsby';

const Blog = ({ 
  data: { 
    allMdx: { 
      nodes: blogs, 
      totalCount 
    },
  }
}) => (
  <Layout>
    <SEO title='Blog' description='my thoughts' />
    <section className='blog-page'>
      <Blogs blogs={blogs} totalCount={totalCount} title='blog' />
    </section>
  </Layout>
);

export const query = graphql`
  {
    allMdx (
      filter: { fileAbsolutePath: { regex: "/posts/" }}, 
      sort: { fields: frontmatter___date, order: DESC },
    ) {
      totalCount,
      nodes {
        id
        slug
        body
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          categories
          description
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
  }
`

export default Blog;