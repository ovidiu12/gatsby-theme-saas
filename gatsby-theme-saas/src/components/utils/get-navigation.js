import { graphql, useStaticQuery } from "gatsby";

const getNavigation = () => {
  const data = useStaticQuery(graphql`
    query {
      allPage {
        nodes {
          title
          slug
        }
      }
    }
  `);

  return data.allPage.nodes;
};

export default getNavigation;
