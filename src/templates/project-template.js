import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Title from '../components/Title';
import SEO from '../components/SEO';
import ReactMarkdown from 'react-markdown';
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa';

const ComponentName = ({ data }) => {
  const { content, title, description, github, url } = data.project;

  return (
    <Layout>
      <SEO title={title} description={description} />
      <section className='blog-template'>
        <Title title={title} />
        <div className='section-center'>
          <article className='blog-content'>
            <ReactMarkdown source={content} />
          </article>
          
          <div className='project-link'>
            <a href={github} target='_blank' rel='noopener noreferrer'>
              <FaGithubSquare className='project-icon' />
            </a>
            <a href={url} target='_blank' rel='noopener noreferrer'>
              <FaShareSquare className='project-icon' />
            </a>
          </div>

          <Link to='/project' className='btn center-btn'>
            back to projects
          </Link>
        </div>
      </section>
    </Layout>
  )
};

export const query = graphql`
  query GetSingleProject($slug: String) {
    project: strapiProjects(slug: { eq: $slug }) {
      title
      description
      content
      github
      url
      roles {
        id
        role
      }
      stack {
        id
        language
      }
    }
  }
`

export default ComponentName;