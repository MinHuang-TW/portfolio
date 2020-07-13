/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({ path: `.env` });

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
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Source Sans Pro`,
            variants: [`300`, `400`],
          },
          {
            family: `DM Mono`,
            variants: [`300`, `500`],
          },
        ],
      },
    },
  ],
}