import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const LogoWrapper = styled.div`
  width: ${props => props.theme.utils.em("150px")};
`;

const Logo = ({ image }) => {
  return (
    <>
      <LogoWrapper>{<Img fluid={image} />}</LogoWrapper>
    </>
  );
};

export default Logo;
