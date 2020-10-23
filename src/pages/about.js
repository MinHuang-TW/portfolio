import React, { useCallback } from 'react';
import { SEO, Layout, Title, Services, Jobs, Education, Map } from '../components';
import Image from 'gatsby-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { graphql } from 'gatsby';

const info = `
  I am Min Huang from Taiwan. Not only do I have years of experiences of product and user experience design, but I also realize the design concept as a self-taught developer pursuing modern web technologies. Programming inspires me to keep creating interesting projects with considerate user experiences
`;

const Button = ({ text }) => (
  <div className='about-btn-wrapper zoomOut'>
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

const About = ({ data: { heroImg }}) => {
  const shiftTo = useCallback((id) => () => {
    scrollTo(id);
  }, []);

  return (
    <Layout>
      <SEO title='About' description='about Min' />
      <section>
        <Image className='intro' fluid={heroImg.sharp.fluid} />
        <div className='section-center about-center'>
          <article className='about-text'>
            <Title title='Hello !' styleClass='fadeIn' />
            <div className='fadeIn'>
              <p>{info}</p>
              <div className='about-link'>
                <button onClick={shiftTo('#skillset')}>Skillsets</button> | <button onClick={shiftTo('#education')}>Education</button> | <button onClick={shiftTo('#experiences')}>Experiences</button>
              </div>
            </div>
            <Button text='download Résumé' />
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
    heroImg: file(relativePath: { eq: "about_img.png" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 1920, quality: 72) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default About;