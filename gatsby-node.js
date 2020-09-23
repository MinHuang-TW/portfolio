const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  const nodeFieldPerType = (filePath, getNodePath) => {
    if (
      node.internal.type === 'Mdx' &&
      node.fileAbsolutePath.includes(filePath)
    ) {
      const value = createFilePath({ node, getNode });

      createNodeField({
        node,
        name: 'slug',
        value: getNodePath(value),
      })
    }
  };

  nodeFieldPerType(`/projects/`, value => `/project${value}`);
  nodeFieldPerType(`/posts/`, value => `/blog${value}`);
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-map-gl/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      projects: allFile(
        filter: {
          internal: { mediaType: { eq: "text/mdx" }}, 
          sourceInstanceName: { eq: "projects" }},
        ) {
        nodes {
          childMdx {
            id
            fields {
              slug
            }
          }
        }
      },
      posts: allFile (
        filter: { internal: { mediaType: { eq: "text/mdx" }},
        sourceInstanceName: {eq: "posts"}},
      ) {
        nodes {
          childMdx {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨 ERROR: Loading "createPages" query')
  }

  const { posts, projects } = result.data;

  projects.nodes.forEach(({ childMdx: { id, fields: { slug }}}) => {
    createPage({
      path: slug,
      component: path.resolve(`src/templates/project-template.js`),
      context: {
        id,
      },
    })
  })

  posts.nodes.forEach(({ childMdx: { id, fields: { slug }}}) => {
    createPage({
      path: slug,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        id
      },
    })
  })
}