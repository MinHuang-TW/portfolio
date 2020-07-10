import React from 'react';
import { SEO, Layout, Hero, Projects } from '../components';
import { graphql } from 'gatsby';

export default ({ data }) => {
  const { allStrapiProjects: { nodes: projects }} = data;

  return (
    <Layout>
      <SEO title='Home' description='Homepage' />
      <Hero />
      <Projects projects={projects} showLink gutterTop />
    </Layout>
  )
};

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        id
        slug
        description
        title
        github
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          language
        }
        categories {
          id
          category
        }
      }
    }
  }
`