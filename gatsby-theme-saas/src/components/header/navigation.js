import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Root = styled.div`
  margin-left: auto;
`;
const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.utils.em("15px")};
  font-weight: 500;
`;

const Navigation = ({ nav }) => {
  return (
    <Root>
      {nav.map(n => (
        <StyledLink to={n.slug} key={n.slug}>
          {n.title}
        </StyledLink>
      ))}
    </Root>
  );
};

export default Navigation;
