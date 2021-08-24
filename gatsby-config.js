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
  ],
}
