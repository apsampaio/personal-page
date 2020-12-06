import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Work Sans", sans-serif;
  }
  
  body {
    background-color: ${({ theme }) => theme.colors.background};
    transition: all 0.25s linear;
  }
`;

export const PagesHolder = styled.div``;
