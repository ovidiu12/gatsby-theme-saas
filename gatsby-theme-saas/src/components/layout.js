import React from "react";
import ResetStyles from "./reset";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import SEO from "./seo";
import Header from "./header/header";
import { graphql } from "gatsby";

const AppRoot = styled.div`
  font-family: "Raleway", sans-serif;
`;

const Layout = props => {
  return (
    <AppRoot>
      <ResetStyles />
      <SEO />
      <ThemeProvider theme={theme}>
        <main>
          <Header />
          {props.children}
        </main>
      </ThemeProvider>
    </AppRoot>
  );
};

export default Layout;
