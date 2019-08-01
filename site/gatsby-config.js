module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-saas`,
      options: {
        fonts: [
          {
            name: "Raleway",
            variations: "300,500,700"
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
