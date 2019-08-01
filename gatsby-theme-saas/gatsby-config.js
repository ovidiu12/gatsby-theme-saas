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

module.exports = ({
  pagesPath = `content/pages`,
  homePath = `content/home`,
  basePath = `/`,
  fonts = defaultFonts,
  mdx = true
}) => {
  let formattedFonts = [];

  fonts.map(font => formattedFonts.push(`${font.name}\:${font.variations}`));

  return {
    siteMetadata: {
      siteTitle: `Themelify SaaS`,
      siteUrl: `https://themelify.com`,
      siteDescription: `A Gatsby theme built for SaaS.`,
      author: `ovidiugr12@gmail.com`,
      logo: `my-logo.png`,
      basePath,
      pagesPath
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
        resolve: `gatsby-source-filesystem`,
        options: {
          name: homePath,
          path: homePath
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`
        }
      },
      mdx && {
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
