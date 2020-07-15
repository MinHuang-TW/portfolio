import React from 'react';
import { Layout, SEO, Title } from '../components';
import { graphql, Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';

const ProjectTemplate = ({ 
  data: { 
    project: {
      title, 
      description, 
      content, 
      time,
      github, 
      url, 
      stack, 
      roles, 
      categories, 
    },
  }, 
}) => (
  <Layout>
    <SEO title={title} description={description} />
    <header className='project-head'>
      {categories.map(({ id, category }) => (
        <p key={id} className='project-category'>[{category}]</p>
      ))}
      <Title title={title} />
    </header>

    <section className='project-template'>
      <div className='section-center'>
        <div className='project-overview'>
          <div>
            <h3>Role</h3>
            {roles.map(({ id, role }) => (<p key={id}>{role}</p>))}
          </div>
          <div>
            <h3>Stack</h3>
            {stack.map(({ id, language }) => (<p key={id}>{language}</p>))}
          </div>
          <div>
            <h3>Date</h3>
            <p>{time || 'NA'}</p>
          </div>
          <div>
            <h3>Demo</h3>
            <a href={url} target='_blank' rel='noopener noreferrer'>
              Launch site
            </a>
          </div>
        </div>

        <article>
          <ReactMarkdown source={content} />
        </article>
        
        <div className='project-btns'>
          <Link to='/project/' className='btn center-btn'>
            back to project
          </Link>
          <a 
            className='btn center-btn' 
            href={github} 
            target='_blank' 
            rel='noopener noreferrer'
          >
            view code
          </a>
        </div>
      </div>

    </section>
  </Layout>
);

export const query = graphql`
  query GetSingleProject($slug: String) {
    project: strapiProjects(slug: { eq: $slug }) {
      title
      time
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
      categories {
        id
        category
      }
    }
  }
`

export default ProjectTemplate;