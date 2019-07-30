const defaultFonts = {
  fonts: [
    {
      name: "Raleway",
      variations: "300"
    },
    {
      name: "source sans pro",
      variations: "300"
    }
  ]
};

module.exports = ({ pagesPath = `content/pages`, fonts = defaultFonts }) => {
  let formattedFonts = [];

  fonts.map(font => formattedFonts.push(`${font.name}\:${font.variations}`));

  return {
    siteMetadata: {
      title: `Themelify Saas`,
      description: `Speed up your development with a blazing fast Gatsby theme by Themelify.`,
      author: `Ovidiu G. <ovidiu@themelify.com>`
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: pagesPath,
          path: pagesPath
        }
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 820,
                quality: 90,
                linkImagesToOriginal: false
              }
            }
          ],
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 820,
                quality: 90,
                linkImagesToOriginal: false
              }
            }
          ]
        }
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-styled-components`,
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: formattedFonts,
          display: "swap"
        }
      }
    ]
  };
};
