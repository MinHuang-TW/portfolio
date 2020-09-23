import React from 'react';
import { SEO, Layout, Title, Services, Jobs, Education, Map } from '../components';
import Image from 'gatsby-image';
import { graphql } from 'gatsby';

const About = ({ data: { about: { nodes }}}) => {
  const { title, info, image } = nodes[0];

  return (
    <Layout>
      <SEO title='About' description='about Min' />
      <section className='about-page'>
        <div className='section-center about-center'>
          <Image fluid={image.childImageSharp.fluid} className='about-img' />
          <article className='about-text'>
            <Title title={title} />
            <p>{info}</p>
          </article>
        </div>
      </section>
      <Services />
      <Jobs />
      <Education />
      <a
        href={process.env.RESUME_LINK}
        className='btn center-btn projects-btn about-btn'
        rel='noopener noreferrer'
        target='_blank'
      >
        download resume
      </a>
      {typeof window !== 'undefined' && <Map />}
    </Layout>
  )
};

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        title
        info
        stack {
          id
          language
        }
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
`

export default About;