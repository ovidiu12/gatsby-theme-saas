import React from "react";
import HowItWorksItem from "./how-it-works-item";
import { Container } from "../grid";
import styled from "styled-components";

const Root = styled.div`
  background: rgba(248, 248, 248, 0.3);
  box-shadow: 0 -20px 50px rgba(0, 0, 0, 0.04);

  ${props => props.theme.mq({ until: "md" })`
    margin-bottom: ${props => props.theme.utils.em("70px")};
  `}
`;

const HowItWorks = props => {
  return (
    <Root>
      <Container>
        {props.items &&
          props.items.map((item, index) => (
            <HowItWorksItem
              key={`hiw-item-${index}`}
              title={item.title}
              description={item.description}
              image={item.image.childImageSharp.fluid}
            />
          ))}
      </Container>
    </Root>
  );
};

export default HowItWorks;
