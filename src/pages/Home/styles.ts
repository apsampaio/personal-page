import styled from "styled-components";

export const HomeBackground = styled.div`
  display: flex;
  padding-left: 300px;
  background: ${({ theme }) => (theme.name === "dark" ? "#282A36" : "#F1FAEE")};
`;
