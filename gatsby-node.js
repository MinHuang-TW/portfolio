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
      projects: allFile (
        filter: {
          internal: { mediaType: { eq: "text/mdx" }}, 
          sourceInstanceName: { eq: "projects" }
        },
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
        filter: { 
          internal: { mediaType: { eq: "text/mdx" }},
          sourceInstanceName: { eq: "posts" }
        },
        sort: { 
          fields: [childMdx___frontmatter___date], 
          order: DESC 
        },
      ) {
        nodes {
          childMdx {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨 ERROR: Loading "createPages" query')
  }

  const posts = result.data.posts.nodes;
  const projects = result.data.projects.nodes;
  
  const postsPerPage = 6;
  const numOfPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numOfPages }).forEach((_, index) => {
    const isFirstPage =  index === 0;
    const currentPage = index + 1;

    createPage({
      path: isFirstPage ? '/blog' : `/blog/${currentPage}`,
      component: path.resolve(`src/templates/blog-list-template.js`),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numOfPages,
        currentPage,
      },
    })
  });

  projects.forEach(({ childMdx: { id, fields: { slug }}}) => {
    createPage({
      path: slug,
      component: path.resolve(`src/templates/project-template.js`),
      context: {
        id,
      },
    })
  })

  posts.forEach(({ childMdx: { id, fields: { slug }}}, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].childMdx;
    const next = index === 0 ? null : posts[index - 1].childMdx;

    createPage({
      path: slug,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        id,
        slug,
        previous,
        next,
      },
    })
  })
}