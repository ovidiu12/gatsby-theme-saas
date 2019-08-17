import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { Container } from "../grid";
import Button from "../ui/button";

const Root = styled.div`
  height: ${props => props.theme.utils.em("650px")};
  background: ${props => props.theme.colors.secondary};
  padding-top: ${props => props.theme.utils.em("130px")};
  position: relative;

  &:before {
    content: "";
    width: 700px;
    height: 700px;
    border-radius: 700px;
    background: rgba(255, 255, 255, 0.03);
    position: absolute;
    bottom: -300px;
  }
  &:after {
    content: "";
    width: 700px;
    height: 700px;
    border-radius: 700px;
    background: rgba(255, 255, 255, 0.03);
    position: absolute;
    top: -300px;
    right: 0;
  }
`;

const Heading = styled.h1`
  color: #fff;
  font-weight: 800;
  margin-bottom: 12px;
`;
const Description = styled.h5`
  color: ${props => props.theme.colors.lightGray};
  font-weight: normal;
  margin-bottom: ${props => props.theme.utils.em("30px")};
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: ${props => props.theme.utils.em("50px")};
`;

const ImageWrapper = styled.div`
  width: ${props => props.theme.utils.em("700px")};
  margin: 0 auto;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  button {
    margin: 0 ${props => props.theme.utils.em("5px")};
  }
`;

const Index = ({
  heroTitle,
  heroDescription,
  primaryHeroBtn,
  secondaryHeroBtn,
  heroImage
}) => {
  return (
    <Root>
      <Container>
        <ContentWrapper>
          <Heading>{heroTitle}</Heading>
          <Description>{heroDescription}</Description>
          <ButtonsWrapper>
            <Button secondary>{primaryHeroBtn}</Button>

            <Button
              style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
              secondary
            >
              {secondaryHeroBtn}
            </Button>
          </ButtonsWrapper>
        </ContentWrapper>
        <ImageWrapper>
          <Img fluid={heroImage} />
        </ImageWrapper>
      </Container>
    </Root>
  );
};

export default Index;
