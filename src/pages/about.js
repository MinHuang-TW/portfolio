import React, { useCallback } from 'react';
import { SEO, Layout, Title, Services, Jobs, Education, Map } from '../components';
import BackgroundImage from 'gatsby-background-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { graphql } from 'gatsby';

const Button = ({ text }) => (
  <div
    className='about-btn-wrapper'
    data-sal='zoom-out'
    data-sal-duration={600}
    data-sal-delay={600}
    data-sal-easing='ease-in'
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

  const shiftTo = useCallback((id) => () => {
    scrollTo(id);
  }, []);

  return (
    <Layout>
      <SEO title='About' description='about Min' />
      <BackgroundImage 
        Tag={`section`} 
        className='section intro'
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
            >
              <p>{info}</p>
              <div className='about-link'>
                <button onClick={shiftTo('#skillset')}>Skillsets</button> | <button onClick={shiftTo('#education')}>Education</button> | <button onClick={shiftTo('#experiences')}>Experiences</button>
              </div>
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