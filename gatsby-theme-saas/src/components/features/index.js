import React from "react";
import styled from "styled-components";
import FeaturedItem from "./featured-item";
import { Container } from "../grid";

const Root = styled.div`
  margin-top: ${props => props.theme.utils.em("300px")};
  margin-bottom: ${props => props.theme.utils.em("120px")};

  ${props => props.theme.mq({ until: "sm" })`
    margin-top: ${props => props.theme.utils.em("150px")};
  `};
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;

  ${props => props.theme.mq({ until: "md" })`
    grid-template-columns: 1fr;
  `};
`;

const Features = props => {
  return (
    <Root>
      <Container>
        <ContentWrapper>
          {props.features !== undefined && props.features !== null
            ? props.features.map((feature, index) => (
                <FeaturedItem
                  key={`featured-item-${index}`}
                  icon={
                    feature.icon !== null
                      ? feature.icon.childImageSharp.fluid
                      : null
                  }
                  topTitle={feature.top_title}
                  title={feature.title}
                  description={feature.description}
                  ctaButton={feature.cta_button}
                />
              ))
            : props.children}
        </ContentWrapper>
      </Container>
    </Root>
  );
};

export default Features;
