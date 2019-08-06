import React from "react";
import styled from "styled-components";

const Root = styled.div`
  margin-top: ${props => props.theme.utils.em("200px")};
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Features = ({ children }) => {
  return <Root>{children}</Root>;
};

export default Features;
