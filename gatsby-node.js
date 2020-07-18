const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ 
      node, 
      getNode,
    });

    createNodeField({
      name: 'slug',
      node,
      value: `/project${value}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      blogs: allStrapiBlogs {
        nodes {
          slug
        }
      },
      projects: allMdx {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨 ERROR: Loading "createPages" query')
  }

  const { blogs, projects } = result.data;

  projects.nodes.forEach(({ id, fields: { slug }}) => {
    createPage({
      path: slug,
      component: path.resolve(`src/templates/project-page.js`),
      context: {
        id,
      },
    })
  })

  blogs.nodes.forEach(blog => {
    createPage({
      path: `/blog/${blog.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: blog.slug,
      },
    })
  })
}