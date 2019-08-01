import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import SEO from "../components/seo";

const PageTemplate = props => {
  console.log(props);
  let page = props.data.page;
  return (
    <>
      <Layout>
        <SEO
          title={page.title}
          description={page.excerpt}
          pathname={page.slug}
        />
        <MDXRenderer>{page.body}</MDXRenderer>
      </Layout>
    </>
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
