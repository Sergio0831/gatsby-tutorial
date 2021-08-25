require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Simple Recipes",
    description: "Nice and clean recipes site",
    author: "@sergejsivcenko",
    person: { name: "john", age: 22 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "john", age: 22 },
      { name: "brad", age: 33 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFULL_SPACE_ID,
        accessToken: process.env.CONTENTFULL_API_KEY,
      },
    },
    // Get styles
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `styles`,
    //     path: `${__dirname}/src/assets/css`,
    //   },
    // },
    // Get all files
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `project`,
    //     path: `${__dirname}/src`,
    //   },
    // },
  ],
}
