import React from "react";
import ResetStyles from "./reset";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";

const AppRoot = styled.div``;

const Layout = props => {
  return (
    <AppRoot>
      <ResetStyles />
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </AppRoot>
  );
};

export default Layout;
