import React from 'react';
import { SEO, Layout, Title, Services, Jobs, Education, Map } from '../components';
import BackgroundImage from 'gatsby-background-image';
import { graphql } from 'gatsby';

const Button = ({ text }) => (
  <div
    data-sal='zoom-out'
    data-sal-duration={600}
    data-sal-delay={600}
    data-sal-easing='ease-in'
    style={{ display: 'inline-block' }}
  >
    <a
      href={process.env.RESUME_LINK}
      className='btn center-btn about-btn'
      rel='noopener noreferrer'
      target='_blank'
    >
      {text}
    </a>
  </div>
);

const About = ({ data: { about: { nodes }, photo }}) => {
  const { info } = nodes[0];
  return (
    <Layout>
      <SEO title='About' description='about Min' />
      <BackgroundImage 
        Tag={`section`} 
        className='section-small intro'
        fluid={photo.childImageSharp.fluid}
      >
        <div className='section-center about-center'>
          <article className='about-text'>
            <div
              data-sal='fade'
              data-sal-duration={600}
              data-sal-easing='ease-in'
            >
              <Title title='Hello !' />
            </div>
            <div 
              data-sal='fade'
              data-sal-duration={600}
              data-sal-delay={300}
              data-sal-easing='ease-in'
              style={{ marginBottom: '2.5rem' }}
            >
              <p>{info}</p>
              <a className='about-link' href="#skillset">Skillsets</a> | <a className='about-link' href="#education">Education</a> | <a className='about-link' href="#experiences">Experiences</a>
            </div>
            <Button text='download resume' />
          </article>
        </div>
      </BackgroundImage>

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
      }
    }
    photo: file(relativePath: { eq: "bg_photo.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default About;