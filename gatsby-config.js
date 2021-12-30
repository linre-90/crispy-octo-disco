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
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Mongo",
        fieldName: "mongo_data",
        url: process.env.MONGO_GRAPHQL_API_ADDRESS,
        headers: {
          "apiKey": process.env.MONGO_GRAPHQL_API_KEY
        },
      },
    }
  ]
};
