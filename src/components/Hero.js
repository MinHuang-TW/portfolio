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
          {/* <h1>Hello!</h1>
          <div className='underline' /> */}
          <h3 style={{ fontSize: '21px', lineHeight: '40px' }}>
            I’m XXX, currently full-time in ATX. My background is in computer science, UI/UX design, and creative problem solving.
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