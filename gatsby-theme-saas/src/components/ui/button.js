import React from "react";
import styled from "styled-components";

const Root = styled.button`
  padding-top: ${props => props.theme.utils.em("18px")};
  padding-bottom: ${props => props.theme.utils.em("18px")};
  padding-left: ${props => props.theme.utils.em("40px")};
  padding-right: ${props => props.theme.utils.em("40px")};
  font-size: ${props => props.theme.utils.em("13px")};
  text-transform: uppercase;
  border-radius: 3px;
  margin: 0 auto;
  outline: 0;
  background: ${props =>
    props.primary ? props.theme.colors.secondary : "white"};
  color: ${props => (props.primary ? "white" : props.theme.colors.primary)};
  cursor: pointer;
  box-shadow: none;
  border: none;
  transition: background-color 0.15s ease-in;
  &:active,
  &:focus {
    outline: 0;
    border-color: ${props => props.theme.colors.lightGray};
  }
  &:hover {
    background-color: ${props =>
      props.primary
        ? props.theme.colors.darkPrimary
        : props.theme.colors.whiteGray};
  }
`;

const Button = ({ children, ...rest }) => {
  return <Root {...rest}>{children}</Root>;
};

export default Button;
