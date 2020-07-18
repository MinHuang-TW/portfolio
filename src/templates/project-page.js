import React from 'react';
import { Layout, SEO, Title } from '../components';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql, Link } from 'gatsby';
// import Image from 'gatsby-image';

// const shortcodes = { Figure };

const ProjectPage = ({ data: { mdx } }) => {
  const {
    title,
    projectBrief,
    categories,
    github,
    url,
    projectDate,
    projectStack,
    projectRole,
  } = mdx.frontmatter;

  return (
    <Layout>
      <SEO title={title} description={projectBrief} />

      <header className='project-head'>
        {categories.map(category => (
          <p key={category} className='project-category'>
            [{category}]
          </p>
        ))}
        <Title title={title} />
      </header>

      <section className='project-template'>
        <div className='section-center content-container'>
          <div className='project-overview'>
            <div>
              <h3>Role</h3>
              <p>{projectRole}</p>
            </div>
            <div>
              <h3>Stack</h3>
              {projectStack.map(stack => (
                <p key={stack}>{stack}</p>
              ))}
            </div>
            <div>
              <h3>Date</h3>
              <p>{projectDate}</p>
            </div>
            <div>
              <h3>Demo</h3>
              <a href={url} target='_blank' rel='noopener noreferrer'>
                Launch site
              </a>
            </div>
          </div>

          <MDXProvider>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>

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
  )
}

export const pageQuery = graphql`
  query ProjectPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        projectBrief
        categories
        projectDate
        projectStack
        projectRole
        github
        url
      }
    }
  }
`

export default ProjectPage;