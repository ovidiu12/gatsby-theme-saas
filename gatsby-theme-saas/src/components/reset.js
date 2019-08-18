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

  /* Position and sizing of burger button */
  .bm-burger-button {
    display: none;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #a90000;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
  Sidebar wrapper styles
  Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
  */
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #121833;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }

`;
