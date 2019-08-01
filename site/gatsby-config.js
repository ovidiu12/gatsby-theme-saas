module.exports = {
  siteMetadata: {
    siteTitle: `Themelify SaaS`,
    siteDescription: `A Gatsby theme built for SaaS.`,
    author: `ovidiugr12@gmail.com`,
    logo: `logo.png`
  },
  plugins: [
    {
      resolve: `gatsby-theme-saas`,
      options: {
        fonts: [
          {
            name: "Raleway",
            primary: true,
            variations: "300,500,700,800"
          },
          {
            name: "source sans pro",
            variations: "300"
          }
        ]
      }
    }
  ]
};
