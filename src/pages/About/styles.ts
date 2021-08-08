import styled from "styled-components";
import Sketch from "react-p5";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: transparent;

  display: flex;
  flex-direction: column;
`;

export const Canvas = styled(Sketch)`
  position: absolute;
`;

export const Header = styled.div`
  height: 120px;
  width: 100%;

  display: flex;

  padding: 0px 15%;

  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 3rem;
  height: 3rem;

  filter: brightness(0) invert(1);

  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

export const ContactButton = styled.button`
  background: transparent;
  color: white;

  font-size: 1rem;
  font-weight: 600;

  padding: 0.6rem 1.5rem;
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

export const GreetContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  padding-top: 5rem;

  h1 {
    font-family: "Inter", sans-serif;
    font-size: 2.5rem;
    color: white;

    text-align: center;

    padding: 0 1rem;
  }

  p {
    font-size: 1.5rem;
    color: white;

    margin-top: 1rem;
    font-weight: 300;
  }

  img {
    width: 15rem;

    border: 2px solid white;
    border-radius: 100%;

    margin-top: 5rem;
  }
`;
