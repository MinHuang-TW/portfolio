import React from 'react';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Services from '../components/Services';
import Jobs from '../components/Jobs';
import Image from 'gatsby-image';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';

const About = ({ data: { about: { nodes }} }) => {
  const { title, info, image } = nodes[0];

  return (
    <Layout>
      <SEO title='About' description='about Min' />
      <section className='about-page'>
        <div className='section-center about-center'>
          <Image 
            fluid={image.childImageSharp.fluid} 
            className='about-img' 
          />
          <article className='about-text'>
            <Title title={title} />
            <p>{info}</p>
            {/* <div className='about-stack'>
              {stack.map(({ id, language }) => (
                <span key={id}>{language}</span>
              ))}
            </div> */}
          </article>
        </div>
      </section>
      <Services />
      <Jobs />
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
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About;