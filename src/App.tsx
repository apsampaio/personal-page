import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import { Routes } from "./routes";

const App = () => {
  const [theme, setTheme] = useState(true);
  const handleToggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeProvider theme={theme ? dark : light}>
      <GlobalStyle />
      <>
        <Routes />
      </>
    </ThemeProvider>
  );
};

export default App;
