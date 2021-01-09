require('dotenv').config({ 
  path: `.env.${process.env.NODE_ENV}` 
});
const unwrapImages = require('remark-unwrap-images');

module.exports = {
  siteMetadata: {
    title: "Min's Portfolio",
    description: "This is Min's Portfolio Site",
    author: "@minhuang",
    twitterUsername: "@MinHuang_TW",
    image: "/twitter-img.png",
    siteUrl: "https://minhuang.netlify.app",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-remark-images`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        plugins: [
          `gatsby-remark-images`,
          `gatsby-remark-images-medium-zoom`,
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              linkImagesToOriginal: false,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`,
            options: {},
          },
        ],
        remarkPlugins: [
          unwrapImages
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 20,
        contentTypes: [`jobs`],
        // singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `source sans pro\:300, 400`,
          `DM mono\:300`,
        ],
        display: 'swap',
      },
    },
  ],
}