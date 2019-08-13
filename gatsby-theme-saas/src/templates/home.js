import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Hero from "../components/hero";
import Features from "../components/features";

const Root = styled.div`
  font-family: ${props =>
    props.font !== "" ? `'${props.font}', sans-serif` : "inherit"};
`;

const Home = props => {
  let page = props.data.allHome.nodes[0];
  return (
    <Root
      font={
        props.pageContext.fonts.length > 0
          ? props.pageContext.fonts.find(font => font.primary === true).name
          : ""
      }
    >
      <Layout>
        <SEO title={page.title} pathname={"/"} />
        <Hero
          heroTitle={page.hero_title}
          heroDescription={page.hero_description}
          primaryHeroBtn={page.primary_hero_btn}
          secondaryHeroBtn={page.secondary_hero_btn}
          heroImage={page.hero_image.childImageSharp.fluid}
        />
        <Features features={page.features} />
      </Layout>
    </Root>
  );
};

export default Home;

export const query = graphql`
  query HomeQuery {
    allHome {
      nodes {
        title
        hero_title
        hero_description
        primary_hero_btn
        secondary_hero_btn
        hero_image {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        features {
          title
          description
          top_title
          cta_button
        }
        body
      }
    }
  }
`;
