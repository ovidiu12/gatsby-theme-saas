import React from "react";
import ResetStyles from "./reset";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import SEO from "./seo";
import Header from "./header";
import Footer from "./footer";

const AppRoot = styled.div``;

const Layout = props => {
  return (
    <AppRoot>
      <ResetStyles />
      <SEO />
      <ThemeProvider theme={theme}>
        <main>
          <Header openMenu={props.openMenu} setOpenMenu={props.setOpenMenu} />
          {props.children}
          <Footer />
        </main>
      </ThemeProvider>
    </AppRoot>
  );
};

export default Layout;
