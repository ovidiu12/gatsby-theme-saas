import { graphql, useStaticQuery } from "gatsby";

const getLogo = fileName => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const fluidLogo = data.allImageSharp.nodes.find(node => {
    return node.fluid.originalName == fileName;
  });
  return fluidLogo;
};

export default getLogo;
