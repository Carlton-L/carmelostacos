require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: "/carmelostacos",
  siteMetadata: {
    siteUrl: `https://carlton.dev/carmelostacos`,
    title: `Carmelo's Tacos`,
    description: `Carmelo's Tacos is a family-owned Mexico City-style taqueria. Hand made tortillas and Vegan options.`,
    image:
      "https://res.cloudinary.com/carlton-dev/image/upload/v1651113220/Carmelo%27s%20Tacos/OGImage_wtyl3r.png",
    author: "https://carlton.dev",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-theme-ui",
      options: {
        preset: require("./src/theme/theme"),
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-KP0H8XTQDL",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `c5l9z1sf`,
        dataset: `production`,
        // a token with read permissions is required
        token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: "default",
        watchMode: true,
      },
    },
  ],
};
