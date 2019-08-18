import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Hero from "../components/hero";
import Features from "../components/features";
import HowItWorks from "../components/how-it-works";
import CallToAction from "../components/call-to-action";
import { slide as BurgerMenu } from "react-burger-menu";
import getNavigation from "../components/utils/get-navigation";
import { Link } from "gatsby";

const Root = styled.div`
  font-family: ${props =>
    props.font !== "" ? `'${props.font}', sans-serif` : "inherit"};
`;

const CloseIcon = styled.div`
  font-family: ${props =>
    props.font !== "" ? `'${props.font}', sans-serif` : "inherit"};
  position: absolute;
  top: 30px;
  right: 30px;
  color: white;
  cursor: pointer;
  outline: 0;
`;

const StyledLink = styled(Link)`
  color: white;
  font-family: ${props =>
    props.font !== "" ? `'${props.font}', sans-serif` : "inherit"};
  font-size: 15px;
  font-weight: 700;
  transition: all 0.2s ease-in;
  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const Home = props => {
  const [openMenu, setOpenMenu] = useState(false);
  const nav = getNavigation();
  let page = props.data.allHome.nodes[0];
  return (
    <div id="outer-container">
      <BurgerMenu
        disableOverlayClick={true}
        isOpen={openMenu}
        customCrossIcon={false}
        disableAutoFocus
        pageWrapId={"page-wrap"}
      >
        <CloseIcon onClick={() => setOpenMenu(!openMenu)}>X</CloseIcon>
        {nav.map(n => (
          <StyledLink to={n.slug} key={n.slug}>
            {n.title}
          </StyledLink>
        ))}
      </BurgerMenu>
      <main id="page-wrap">
        <Root
          font={
            props.pageContext.fonts.length > 0
              ? props.pageContext.fonts.find(font => font.primary === true).name
              : ""
          }
        >
          <Layout openMenu={openMenu} setOpenMenu={setOpenMenu}>
            <SEO title={page.title} pathname={"/"} />
            <Hero
              heroTitle={page.hero.hero_title}
              heroDescription={page.hero.hero_description}
              primaryHeroBtn={page.hero.primary_hero_btn}
              secondaryHeroBtn={page.hero.secondary_hero_btn}
              heroImage={page.hero.hero_image.childImageSharp.fluid}
            />
            <Features features={page.features} />
            <HowItWorks items={page.how_it_works} />
            <CallToAction
              title={page.call_to_action.title}
              cta_button1={page.call_to_action.cta_button1}
              cta_button2={page.call_to_action.cta_button2}
            />
            <MDXRenderer>{page.body}</MDXRenderer>
          </Layout>
        </Root>
      </main>
    </div>
  );
};

export default Home;

export const query = graphql`
  query HomeQuery {
    allHome {
      nodes {
        title
        hero {
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
        }
        features {
          icon {
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          description
          top_title
          cta_button
        }
        how_it_works {
          image {
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          description
        }
        call_to_action {
          title
          cta_button1
          cta_button2
        }
        body
      }
    }
  }
`;
