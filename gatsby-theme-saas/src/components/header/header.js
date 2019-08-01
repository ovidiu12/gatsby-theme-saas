import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import getLogo from "../utils/get-logo";
import getNavigation from "../utils/get-navigation";
import { Container } from "../grid";
import Logo from "./logo";
import Navigation from "./navigation";

const Root = styled.div`
  background: white;
  padding: ${props => props.theme.utils.em("20px")};
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  const nav = getNavigation();
  return (
    <Root>
      <Container>
        <ContentWrapper>
          <Link to="/">
            <Logo image={logo.fluid} />
          </Link>
          <Navigation nav={nav} />
        </ContentWrapper>
      </Container>
    </Root>
  );
};

export default Header;
