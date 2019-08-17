import React from "react";
import styled from "styled-components";
import Button from "../ui/button";
import Img from "gatsby-image";

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: ${props => props.theme.utils.em("10px")};
`;
const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ContentWrapper = styled.div``;
const TopTitle = styled.p`
  margin-bottom: 0;
  text-transform: uppercase;
  color: ${props => props.theme.colors.lightGray};
  margin-bottom: 0;
  font-size: ${props => props.theme.utils.em("14px")};
`;
const Title = styled.h3`
  font-weight: 800;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.sizes.spacing.sm};
`;
const Description = styled.p`
  color: ${props => props.theme.colors.gray};
  margin-bottom: 0;
`;
const CtaButton = styled(Button)`
  margin-top: ${props => props.theme.utils.em("25px")};
`;

const FeaturedItem = props => {
  return (
    <Root>
      {props.icon !== null && (
        <IconWrapper>
          <Img fluid={props.icon} />
        </IconWrapper>
      )}
      <ContentWrapper>
        <TopTitle>{props.topTitle}</TopTitle>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
        {props.ctaButton !== null && (
          <CtaButton primary>{props.ctaButton}</CtaButton>
        )}
      </ContentWrapper>
    </Root>
  );
};

export default FeaturedItem;
