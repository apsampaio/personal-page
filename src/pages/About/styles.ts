import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: linear-gradient(180deg, #1d1d1f 10%, #282a36 100%);

  display: flex;
`;

export const Header = styled.div`
  height: 70px;
  width: 100%;

  display: flex;

  padding: 0px 16px;

  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 3rem;
  height: 3rem;

  filter: brightness(0) invert(1);
`;

export const ContactButton = styled.button`
  background: transparent;
  color: white;

  font-size: 1rem;
  font-weight: 600;

  padding: 0.6rem;
  border-radius: 100px;
  border: 2px solid white;

  outline: none;

  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
  }
`;
