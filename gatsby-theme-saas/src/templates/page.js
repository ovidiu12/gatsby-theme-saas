import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";
import { Container } from "../components/grid";
const Root = styled.div`
  font-family: ${props =>
    props.font !== "" ? `'${props.font}', sans-serif` : "inherit"};
`;

const ImgWrapper = styled.div`
  height: 500px;
  position: relative;
  margin-bottom: ${props => props.theme.utils.em("100px")};
  opacity: 0.3;
  img {
    filter: grayscale(100%);
  }
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.gray};
`;

const ContentWrapper = styled.div`
  color: ${props => props.theme.colors.gray};
  margin-bottom: ${props => props.theme.utils.em("100px")};
`;

const PageTemplate = props => {
  let page = props.data.page;
  return (
    <Root
      font={
        props.pageContext.fonts.length > 0
          ? props.pageContext.fonts.find(font => font.primary === true).name
          : ""
      }
    >
      <Layout>
        <SEO
          title={page.title}
          description={page.excerpt}
          pathname={page.slug}
        />
        <ImgWrapper>
          <Img
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%"
            }}
            fluid={page.cover.childImageSharp.fluid}
          />
        </ImgWrapper>
        <Container>
          <Title>{page.title}</Title>
          <ContentWrapper>
            <MDXRenderer>{page.body}</MDXRenderer>
          </ContentWrapper>
        </Container>
      </Layout>
    </Root>
  );
};

export default PageTemplate;

export const query = graphql`
  query PageQuery($slug: String!) {
    page(slug: { eq: $slug }) {
      title
      slug
      excerpt
      body
      cover {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
