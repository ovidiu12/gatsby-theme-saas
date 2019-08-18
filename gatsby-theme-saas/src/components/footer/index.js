import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from "../grid";

const Root = styled.div`
  background: ${props => props.theme.colors.secondary};
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.utils.em("20px")};

  ${props => props.theme.mq({ until: "md" })`
    flex-direction: column;
  `}
`;

const Copyright = styled.p`
  color: white;
  font-weight: 300;
  margin-bottom: 0;
  font-size: ${props => props.theme.utils.em("14px")};
  ${props => props.theme.mq({ until: "md" })`
    text-align: center;
  `}
`;

const Author = styled.div`
  margin-left: auto;
  color: white;
  font-size: ${props => props.theme.utils.em("14px")};
  font-weight: 300;
  a {
    color: white;
    font-weight: 800;
  }
  ${props => props.theme.mq({ until: "md" })`
    margin-left: 0;
  `}
`;
const Footer = () => {
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
  return (
    <Root>
      <Container>
        <ContentWrapper>
          <Copyright>
            © {data.site.siteMetadata.siteTitle} |{" "}
            {data.site.siteMetadata.siteDescription}
          </Copyright>
          <Author>
            Contact:{" "}
            <a href={`mailto: ${data.site.siteMetadata.author}`}>
              {data.site.siteMetadata.author}
            </a>
          </Author>
        </ContentWrapper>
      </Container>
    </Root>
  );
};

export default Footer;
