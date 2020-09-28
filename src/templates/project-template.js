import React from 'react';
import { Layout, SEO, Title, TitleAnchored } from '../components';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql, Link } from 'gatsby';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'gatsby-image';

const shortcodes = { TitleAnchored, BsArrowRight };

const ProjectTemplate = ({
  data: {
    project: {
      body,
      frontmatter: {
        title,
        projectBrief,
        image,
        github,
        url,
        projectDate,
        projectStack,
        projectRole,
      },
    },
  },
}) => (
  <Layout>
    <SEO title={title} description={projectBrief} />

    <header className='project-head fadeIn'>
      <Title title={title} />
      <Image className='project-main' fluid={image.childImageSharp.fluid} />
    </header>

    <section className='project-template fadeIn-bottom'>
      <div className='section-center content-container'>
        <div className='project-overview'>
          <div>
            <h3>Role</h3>
            {projectRole.map(role => (
              <p key={role}>{role}</p>
            ))}
          </div>
          <div>
            <h3>Stack</h3>
            {projectStack.map(stack => (
              <p key={stack}>{stack}</p>
            ))}
          </div>
          <div>
            <h3>Time</h3>
            <p>{projectDate.split('- ')[0]} -</p>
            <p>{projectDate.split('- ')[1]}</p>
          </div>
          <div>
            <h3>{title === 'SpInsight' ? 'Download' : 'Demo'}</h3>
            <a href={url} target='_blank' rel='noopener noreferrer'>
              {title === 'SpInsight' ? 'FULL MASTER THESIS' : 'LAUNCH SITE'}
            </a>
          </div>
        </div>

        <MDXProvider components={shortcodes}>
          <MDXRenderer>{body}</MDXRenderer>
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
);

export const query = graphql`
  query GetSingleProject($id: String) {
    project: mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        projectBrief
        projectDate
        projectStack
        projectRole
        github
        url
        image {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default ProjectTemplate;