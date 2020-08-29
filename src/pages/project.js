import React, { useState, useCallback } from "react"
import { Layout, SEO, Title, Filter, Projects } from "../components"
import { graphql } from "gatsby"

const ProjectsPage = ({
  data: {
    allMdx: { nodes: projects },
  },
}) => {
  const filterLists = ["all", "Development", "Design", "Research"]
  const [selected, setSelected] = useState(filterLists[0])
  const handleSelected = useCallback(
    list => event => {
      setSelected(list)
    },
    [setSelected]
  )

  return (
    <Layout>
      <SEO title="Projects" description="all projects" />
      <section className="projects-page">
        <Title title="All Projects" styleClass="project-title" />
        <Filter
          lists={filterLists}
          selected={selected}
          onSelected={handleSelected}
        />

        <Projects
          title="all projects"
          selected={selected}
          projects={
            selected === "all"
              ? projects
              : projects.filter(({ frontmatter: { categories } }) =>
                  categories.includes(selected)
                )
          }
        />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
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
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage
