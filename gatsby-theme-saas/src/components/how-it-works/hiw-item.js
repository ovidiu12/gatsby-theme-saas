import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const ImgWrapper = styled.div`
  padding: 0 ${props => props.theme.utils.em("50px")};
  max-width: 70%;
  width: 100%;
`;
const ContentWrapper = styled.div`
  max-width: 40%;
`;
const Root = styled.div`
  display: flex;
  align-items: center;
  &:nth-of-type(2n) {
    ${ImgWrapper} {
      order: 2;
    }
  }
`;
const Title = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-weight: 800;
`;
const Description = styled.p`
  color: ${props => props.theme.colors.lightGray};
  margin-bottom: 0;
  font-size: ${props => props.theme.utils.em("18px")};
  line-height: 32px;
`;

const HiwItem = ({ title, description, image }) => {
  return (
    <Root>
      <ImgWrapper>
        <Img fluid={image} />
      </ImgWrapper>
      <ContentWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentWrapper>
    </Root>
  );
};

export default HiwItem;
