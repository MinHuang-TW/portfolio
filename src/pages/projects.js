import React from 'react';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';

const ProjectsPage = ({ data: { allStrapiProjects: { nodes: projects }} }) => (
  <Layout>
    <SEO title='Projects' description='all projects' />
    <section className='projects-page'>
      <Projects projects={projects} title='all projects' />
    </section>
  </Layout>
);

export default ProjectsPage;

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        id
        description
        title
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
      }
    }
  }
`