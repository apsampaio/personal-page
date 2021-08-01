import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;

  section {
    width: 100vw;
    height: 100vh;
  }
`;

export const Container = styled.section`
  background-color: ${({ theme }) =>
    theme.name === "dark" ? "#282A36" : "#F8F8F2"};
  transition: background-color linear 0.2s;
`;
