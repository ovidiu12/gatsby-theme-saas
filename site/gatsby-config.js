module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-saas`,
      options: {
        fonts: [
          {
            name: "Roboto",
            variations: "300,700"
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
