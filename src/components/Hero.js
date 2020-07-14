import React from 'react';
// import Image from 'gatsby-image';
// import { Link } from 'gatsby';
// import SocialLinks from '../constants/socialLinks';
// import { graphql, useStaticQuery } from 'gatsby';

const Hero = () => {
  // const { file: { childImageSharp: { fluid }} } = useStaticQuery(query);
  
  return (
    <header className='hero'>
      <div className='section-center hero-center' style={{ width: '90vw' }}>
        <article className='hero-info'>
          {/* <h1>Hello!</h1> */}
          <h3>
            I design and develop interfaces with a focus on user experience.
          </h3>
          {/* <Link to='/contact' className='btn'>contact me</Link>
          <SocialLinks /> */}
        </article>
        {/* <Image fluid={fluid} className='hero-img' /> */}
      </div>
    </header>
  )
};

export default Hero;

// const query = graphql`
//   {
//     file(relativePath: { eq: "hero-img.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `