import React from "react";
import styled from "styled-components";
import FeaturedItem from "./featured-item";
import { Container } from "../grid";

const Root = styled.div`
  margin-top: ${props => props.theme.utils.em("300px")};
  margin-bottom: ${props => props.theme.utils.em("120px")};
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
`;

const Features = props => {
  return (
    <Root>
      <Container>
        <ContentWrapper>
          {props.features !== undefined && props.features !== null
            ? props.features.map(feature => (
                <FeaturedItem
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
