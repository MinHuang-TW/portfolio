import React from 'react';
import { SEO, Layout, Blogs, Pagination } from '../components';
import { graphql } from 'gatsby';

const Blog = ({
  data: {
    allMdx: { nodes: blogs, totalCount },
  },
  pageContext: { currentPage, numOfPages },
}) => (
  <Layout>
    <SEO title='Blog' description='my thoughts about life and work' />
    <section className='blog-page'>
      <Blogs blogs={blogs} totalCount={totalCount} title='blog' />
    </section>
    {numOfPages > 1 && (
      <Pagination currentPage={currentPage} totalPages={numOfPages} />
    )}
  </Layout>
);

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
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
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default Blog;