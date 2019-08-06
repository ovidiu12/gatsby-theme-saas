import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { Container } from "../grid";
import Button from "../ui/button";

const Root = styled.div`
  height: ${props => props.theme.utils.em("650px")};
  background: white;
  padding-top: ${props => props.theme.utils.em("130px")};
  position: relative;
`;

const Heading = styled.h1`
  color: ${props => props.theme.colors.secondary};
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
            <Button primary>{primaryHeroBtn}</Button>
            <Button secondary>{secondaryHeroBtn}</Button>
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
