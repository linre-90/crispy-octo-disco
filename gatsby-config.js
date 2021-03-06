require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


const myUrl = "https://portfolio-linre.web.app";

module.exports = {
  siteMetadata: {
    siteUrl: myUrl,
    title: "JL-Portfolio",
  },
  plugins: [
    
    `gatsby-plugin-fontawesome-css`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JL portfolio`,
        short_name: `JL pf`,
        description: "This is my personal portfolio website.",
        start_url: `/`,
        background_color: `#3D3B8E`,
        theme_color: `#3D3B8E`,
        display: `standalone`,
        icon: `${__dirname}/src/images/icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-offline"
    },
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
      resolve: "gatsby-plugin-sitemap"
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options:{
        host: myUrl,
        sitemap: myUrl+'/sitemap.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
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
