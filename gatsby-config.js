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
    {
      resolve: "gatsby-source-mongodb",
      options:{
        dbName: "brian",
        collection:["keywords", "popular"],
        server:{
          address:"localhost",
          port:8001
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
