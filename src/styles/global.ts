import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    font-family: "Work Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  
  html, body {
    height: 100%
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    overflow: hidden;
  }
`;
