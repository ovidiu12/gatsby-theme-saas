import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import getLogo from "../utils/get-logo";
import getNavigation from "../utils/get-navigation";
import { Container } from "../grid";
import Logo from "./logo";
import Navigation from "./navigation";
import Button from "../ui/button";

const Root = styled.div`
  padding: ${props => props.theme.utils.em("20px")};
  background: ${props => props.theme.colors.secondary};
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBtn = styled(Button)`
  margin: 0;
  padding: ${props => props.theme.utils.em("15px")};
  padding-left: ${props => props.theme.utils.em("30px")};
  padding-right: ${props => props.theme.utils.em("30px")};
`;

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
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
            <LogoWrapper>
              <Logo image={logo.fluid} />
              {data.site.siteMetadata.siteTitle}
            </LogoWrapper>
          </Link>
          <Navigation nav={nav} />
          <StyledBtn secondary>Get Started</StyledBtn>
        </ContentWrapper>
      </Container>
    </Root>
  );
};

export default Header;
