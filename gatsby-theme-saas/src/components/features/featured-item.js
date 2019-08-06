import React from "react";
import styled from "styled-components";
import Button from "../ui/button";

const Root = styled.div``;
const TopTitle = styled.p`
  margin-bottom: 0;
  text-transform: uppercase;
  color: ${props => props.theme.colors.lightGray};
`;
const Title = styled.h1``;
const Description = styled.p``;
const CtaButton = styled(Button)``;

const FeaturedItem = ({
  topTitle = "Default top title",
  title = "Default title",
  description = "Default description",
  ctaButton = "Default Button"
}) => {
  return (
    <Root>
      <TopTitle>{topTitle}</TopTitle>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <CtaButton primary>{ctaButton}</CtaButton>
    </Root>
  );
};

export default FeaturedItem;
