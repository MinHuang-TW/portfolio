import React from 'react';
// import Image from 'gatsby-image';
// import { Link } from 'gatsby';
// import SocialLinks from '../constants/socialLinks';
import { graphql, useStaticQuery } from 'gatsby';

const Hero = () => {
  const { file: { childImageSharp: { fluid }} } = useStaticQuery(query);
  
  return (
    <header className='hero'>
      <div className='section-center hero-center' style={{ width: '90vw' }}>
        <article className='hero-info'>
          <div>
            <h1>Hello!</h1>
            {/* <div className='underline' /> */}
            <p>My name is Min Huang. I have a passionate interest in programming. My capability of concept realization is strengthened by the education of user experience design and the years’ professional experience of user research and design.</p>
            {/* <Link to='/contact' className='btn'>contact me</Link>
            <SocialLinks /> */}
          </div>
        </article>
        {/* <Image fluid={fluid} className='hero-img' /> */}
      </div>
    </header>
  )
};

export default Hero;


const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`