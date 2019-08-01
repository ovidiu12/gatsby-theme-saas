import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Root = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
`;
const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.utils.em("15px")};
  font-weight: 700;
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
