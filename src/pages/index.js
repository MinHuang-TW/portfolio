import React from "react"
import { SEO, Layout, Hero, Projects } from "../components"
import { graphql } from "gatsby"

export default ({ data }) => {
  const {
    allMdx: { nodes: projects },
  } = data

  return (
    <Layout>
      <SEO title="Home" description="Homepage" />
      <Hero />
      <Projects projects={projects} showLink gutterTop />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
        frontmatter: { featured: { eq: true } }
      }
      sort: { fields: frontmatter___sortDate, order: DESC }
    ) {
      nodes {
        id
        slug
        frontmatter {
          title
          projectBrief
          categories
          github
          url
          projectStack
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
