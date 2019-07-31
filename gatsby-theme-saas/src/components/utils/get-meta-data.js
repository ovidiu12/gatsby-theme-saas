import { graphql, useStaticQuery } from "gatsby";

const getMetaData = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteUrl
          siteDescription
          author
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default getMetaData;
