import React from "react";
import styled from "styled-components";

const Root = styled.div`
  max-width: ${props => props.theme.utils.em(props.theme.sizes.grid.siteWidth)};
  width: 100%;
  margin: 0 auto;
  padding: 0
    ${props => props.theme.utils.em(props.theme.sizes.grid.gutterWidth / 2)};
  ${props => props.theme.mq({ from: "md", until: "lg" })`
    padding: 0 ${props.theme.utils.em(props.theme.sizes.grid.gutterWidth)};
  `}
  ${props => props.theme.mq({ until: "md" })`
    padding: 0 ${props.theme.utils.em("20px")};
  `}
`;

export default ({ style, children }) => <Root style={style}>{children}</Root>;
