require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My-portfolio",
  },
  plugins: [
    
    `gatsby-plugin-fontawesome-css`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-transformer-sharp`,
    
    {
      resolve: `gatsby-transformer-remark`,
      options:{
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdownPortfolio`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdownImages`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `briandata`,
        path: `${__dirname}/src/data/`,
      },
    },
    
    {
      resolve: `gatsby-transformer-json`,
    },
    
  ]
};
