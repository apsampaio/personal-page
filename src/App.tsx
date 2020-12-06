import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Sidebar from "../src/components/Sidebar";

import Home from "./pages/Home";

import GlobalStyle, { PagesHolder } from "./styles/global";
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
      <PagesHolder>
        <Home />
      </PagesHolder>
    </ThemeProvider>
  );
};

export default App;
