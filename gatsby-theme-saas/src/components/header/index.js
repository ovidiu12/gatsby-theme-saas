import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import getLogo from "../utils/get-logo";
import getNavigation from "../utils/get-navigation";
import { Container } from "../grid";
import Logo from "./logo";
import Navigation from "./navigation";

const Root = styled.div`
  padding: ${props => props.theme.utils.em("20px")};
  background: ${props => props.theme.colors.secondary};
  position: relative;
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

const BurgerButton = styled.button`
  color: white;
  border: none;
  background: none;
  font-size: 24px;
  cursor: pointer;
  outline: 0;
  margin-left: auto;
  z-index: 1000;
  ${props => props.theme.mq({ from: "sm" })`
  display: none;
`}
`;

const DesktopMenu = styled.div`
  margin-left: auto;
  z-index: 1000;
  ${props => props.theme.mq({ until: "sm" })`
    display: none;
  `}
`;

const Header = props => {
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
          <DesktopMenu>
            <Navigation nav={nav} />
          </DesktopMenu>
          <BurgerButton onClick={() => props.setOpenMenu(!props.openMenu)}>
            ☰
          </BurgerButton>
        </ContentWrapper>
      </Container>
    </Root>
  );
};

export default Header;
