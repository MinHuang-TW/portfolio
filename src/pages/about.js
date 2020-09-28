import React from 'react';
import { SEO, Layout, Title, Services, Jobs, Education, Map } from '../components';
import Image from 'gatsby-image';
import { graphql } from 'gatsby';

const About = ({ data: { about: { nodes }}}) => {
  const { info, image } = nodes[0];

  return (
    <Layout>
      <SEO title='About' description='about Min' />
      <section className='section-small'>
        <div className='section-center about-center'>
          <Image fluid={image.childImageSharp.fluid} className='about-img' />
          <article className='about-text flyIn'>
            <Title title='Hello !' />
            <p>{info}</p>
            <a
              href={process.env.RESUME_LINK}
              className='btn center-btn about-btn'
              rel='noopener noreferrer'
              target='_blank'
            >
              download resume
            </a>
          </article>
        </div>
      </section>
      <Services />
      <Education />
      <Jobs />
      {typeof window !== 'undefined' && <Map />}
    </Layout>
  )
};

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
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