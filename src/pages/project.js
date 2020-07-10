import React, { useState, useCallback } from 'react'
import { Layout, SEO, Title, Filter, Projects } from '../components'
import { graphql } from 'gatsby'

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  const filterLists = ['all', 'development', 'design', 'research'];
  const [selected, setSelected] = useState(filterLists[0]);
  const handleSelected = useCallback((list) => (event) => {
    setSelected(list);
  }, [setSelected]);

  return (
    <Layout>
      <SEO title='Projects' description='all projects' />
      <section className='projects-page'>
        <Title title='All Projects' styleClass='project-title' />
        <Filter lists={filterLists} selected={selected} onSelected={handleSelected} />
        
        <Projects
          title='all projects'
          projects={selected === 'all' ? projects
            : projects.filter(({ categories }) => {
                const category = categories.map(({ category }) => category)
                return category.includes(selected)
              })
          }
        />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        id
        slug
        description
        content
        title
        github
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        roles {
          id
          role
        }
        stack {
          id
          language
        }
        categories {
          id
          category
        }
      }
    }
  }
`

export default ProjectsPage;