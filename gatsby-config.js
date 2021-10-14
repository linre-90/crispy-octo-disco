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
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: `Brian`,
        collection: ["keywords", "popular"],
        server: {
          address: process.env.DATABASE_URL,
          port: process.env.DATABASE_PORT
        },
        auth: {
          user: process.env.DATABASE_USER,
          password: process.env.DATABASE_PASSWORD
        },
        extraParams: {
          ssl: true,
          authSource: 'admin',
          retryWrites: true
        },
      },
    }],
};
