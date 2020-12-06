import styled from "styled-components";

export const HomeBackground = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding-left: 300px;

  justify-content: center;
  padding-top: 64px;

  height: 100vh;
  width: calc(100vw);

  background: ${({ theme }) => (theme.name === "dark" ? "#282A36" : "#F8F8F2")};
`;
