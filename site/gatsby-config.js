module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-saas`,
      options: {
        fonts: {
          primary: {
            name: "Raleway",
            variations: "300,400,700"
          },
          secondary: {
            name: "source sans pro",
            variations: "300,400,700"
          }
        },
        test: {
          primary: "some test"
        }
      }
    }
  ]
};
