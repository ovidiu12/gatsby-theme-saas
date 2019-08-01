import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";

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
          heroBtn={page.hero_btn}
          heroImage={page.hero_image.childImageSharp.fluid}
        />
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
        hero_btn
        hero_image {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
