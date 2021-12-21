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
    {
      resolve: "gatsby-source-mongodb",
      options:{
        dbName: "brian",
        collection:["keywords", "popular"],
        server:{
          address:process.env.DBURL,
          port:process.env.DBPORT
        },
        auth:{user: process.env.MONGOREADUSER, password:process.env.MONGOREADPASS},
        extraParams:{
          ssl:false,
          authSource: "brian",
          retryWrites: true
        }
      }
    },
    {
      resolve: "gatsby-source-mongodb",
      options:{
        dbName: "creators",
        collection:["image"],
        server:{
          address:process.env.DBURL,
          port:process.env.DBPORT
        },
        auth:{user: process.env.MONGOREADUSER, password:process.env.MONGOREADPASS},
        extraParams:{
          ssl:false,
          authSource: "brian",
          retryWrites: true
        }
      }
    }
  ]
};
