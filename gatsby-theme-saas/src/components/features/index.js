import React from "react";
import styled from "styled-components";
import FeaturedItem from "./featured-item";
import { Container } from "../grid";

const Root = styled.div`
  margin-top: ${props => props.theme.utils.em("250px")};
  display: flex;
  flex-direction: column;
`;

const Features = props => {
  return (
    <Container>
      <Root>
        {props.features !== undefined && props.features !== null
          ? props.features.map(feature => (
              <FeaturedItem
                topTitle={feature.top_title}
                title={feature.title}
                description={feature.description}
                ctaButton={feature.cta_button}
              />
            ))
          : props.children}
      </Root>
    </Container>
  );
};

export default Features;
