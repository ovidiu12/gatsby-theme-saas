import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import getLogo from "./utils/get-logo";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          logo
        }
      }
    }
  `);

  const logo = getLogo(data.site.siteMetadata.logo);
  return (
    <div>
      <h1>Header</h1>
      <Img fluid={logo.fluid} />
    </div>
  );
};

export default Header;
