import { createGlobalStyle } from "styled-components";
import theme from "../theme";

export default createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  * {
    &,
    &:before,
    &:after {
      box-sizing: inherit;
    }
  }

  a {
    text-decoration: none;
    color: ${theme.colors.mirage};

    &:hover {
      color: ${theme.colors.comet};
    }
    
  }

  a.u-txt-underline {
    border-bottom: 1px dotted currentColor;
    }

  p {
    margin: 0;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    color: ${theme.colors.mirage};
    font-size: ${theme.utils.em(theme.sizes.baseFontSize)};
    
  }

  body, p {
    line-height: ${theme.utils.em(theme.sizes.lineHeight)};
  }

  p {
    margin-bottom: ${theme.utils.em(theme.sizes.lineHeight)};
    
    font-weight: 500 !important;
  }

  img, embed, object, video {
    max-width: 100%;
    height: inherit;
    _width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    text-rendering: optimizelegibility;
    font-weight: 600;
    margin: 0;
    color: ${theme.colors.blackPearl};
        
  }

  ul, ol {
    padding-left: 0;
  }

  h1 {
    font-size: ${theme.utils.em(theme.sizes.scale.xl)};
    margin-bottom: ${theme.utils.em(
      theme.sizes.lineHeight,
      theme.sizes.scale.xl
    )};
  }

  h2 {
    font-size: ${theme.utils.em(theme.sizes.scale.lg)};
    margin-bottom: ${theme.utils.em(
      theme.sizes.lineHeight,
      theme.sizes.scale.lg
    )};
  }

  h3 {
    font-size: ${theme.utils.em(theme.sizes.scale.md)};
    margin-bottom: ${theme.utils.em(
      theme.sizes.lineHeight,
      theme.sizes.scale.md
    )};
  }

  h4 {
    font-size: ${theme.utils.em(theme.sizes.scale.sm)};
    margin-bottom: ${theme.utils.em(
      theme.sizes.lineHeight,
      theme.sizes.scale.sm
    )};
  }

  h5 {
    font-size: ${theme.utils.em(theme.sizes.scale.xs)};
    margin-bottom: ${theme.utils.em(
      theme.sizes.lineHeight,
      theme.sizes.scale.xs
    )};
  }

  h6 {
    font-size: ${theme.utils.em(theme.sizes.scale.xxs)};
    margin-bottom: ${theme.utils.em(
      theme.sizes.lineHeight,
      theme.sizes.scale.xxs
    )};
  }

`;
