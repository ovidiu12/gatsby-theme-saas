module.exports = themeOptions => {
  return {
    siteMetadata: {
      title: `Themelify Saas`,
      description: `Blazing fast development with a blazing fast Gatsby SaaS theme by Themelify.`,
      author: `Ovidiu G. <ovidiu@themelify.com>`
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-styled-components`,
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `${themeOptions.fonts.primary.name}\:${
              themeOptions.fonts.primary.variations
            }`,
            `${themeOptions.fonts.secondary.name}\:${
              themeOptions.fonts.secondary.variations
            }`
          ],
          display: "swap"
        }
      }
    ]
  };
};
