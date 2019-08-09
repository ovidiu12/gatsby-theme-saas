import React from "react";
import styled from "styled-components";
import FeaturedItem from "./featured-item";
import { Container } from "../grid";

const Root = styled.div`
  margin-top: ${props => props.theme.utils.em("200px")};
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Features = ({ features }) => {
  return (
    <Container>
      <Root>
        {features.map(feature => (
          <FeaturedItem
            title={feature.title}
            description={feature.description}
          />
        ))}
      </Root>
    </Container>
  );
};

export default Features;
