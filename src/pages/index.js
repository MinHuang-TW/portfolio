import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
// import Services from '../components/Services';
// import Jobs from '../components/Jobs';
import Projects from '../components/Projects';
// import Blogs from '../components/Blogs';
import SEO from '../components/SEO';

export default ({ data }) => {
  const { 
    allStrapiProjects: { nodes: projects },
    // allStrapiBlogs: { nodes: blogs },
  } = data;

  return (
    <Layout>
      <SEO title='Home' description='Homepage' />
      <Hero />
      {/* <Services /> */}
      {/* <Jobs /> */}
      <Projects projects={projects} title='featured projects' showLink />
      {/* <Blogs blogs={blogs} title='latest articles' showLink /> */}
    </Layout>
  )
};

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
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
    },
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
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