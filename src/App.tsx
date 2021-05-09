import React, { ReactNode, useEffect, useRef, useState } from "react";
import { ThemeProvider } from "styled-components";

import Sidebar from "../src/components/Sidebar";

import Home from "./pages/Home";

import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

const App = () => {
  const [theme, setTheme] = useState(true);
  const handleToggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeProvider theme={theme ? dark : light}>
      <GlobalStyle />
      <Sidebar handleToggleTheme={handleToggleTheme} />
      <>
        <Home />
      </>
    </ThemeProvider>
  );
};

export default App;
