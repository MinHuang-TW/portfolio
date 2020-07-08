import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import SEO from '../components/SEO';

export default ({ data }) => {
  const { allStrapiProjects: { nodes: projects }} = data;
  const filters = ['all', 'research', 'design', 'development'];

  return (
    <Layout>
      <SEO title='Home' description='Homepage' />
      <Hero />
      <Projects projects={projects} showLink />
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