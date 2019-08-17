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
  color: white;
  font-size: ${props => props.theme.utils.em("15px")};
  font-weight: 700;
  transition: all 0.2s ease-in;
  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
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
