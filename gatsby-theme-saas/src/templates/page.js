import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Root = styled.div`
  font-family: ${props =>
    props.font !== "" ? `'${props.font}', sans-serif` : "inherit"};
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
        <MDXRenderer>{page.body}</MDXRenderer>
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
