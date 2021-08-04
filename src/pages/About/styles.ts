import styled from "styled-components";
import Sketch from "react-p5";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: transparent;
  /* linear-gradient(180deg, #1d1d1f 10%, #282a36 100%); */

  display: flex;

  &:hover {
    cursor: none;
  }
`;

export const Canvas = styled(Sketch)`
  position: absolute;
`;

export const Header = styled.div`
  height: 70px;
  width: 100%;

  display: flex;

  padding: 0px 16px;

  align-items: center;
  justify-content: space-between;

  z-index: 15;
`;

export const Logo = styled.img`
  width: 3rem;
  height: 3rem;

  filter: brightness(0) invert(1);

  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  transition: all 0.3s ease;

  &:hover {
    filter: none;
  }
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
