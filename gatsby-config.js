module.exports = {
  siteMetadata: {
    title: `Sailesh Maharjan's Portfolio`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-94088018-1`,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: './src/images/favicon.png',
      },
    },
  ],
};
