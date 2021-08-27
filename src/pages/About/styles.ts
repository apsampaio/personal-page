import styled from "styled-components";
import Sketch from "react-p5";

export const Container = styled.div`
  width: 100vw;

  background: transparent;

  display: flex;
  flex-direction: column;
`;

export const Canvas = styled(Sketch)`
  position: fixed;
`;

export const Header = styled.div`
  height: 120px;
  width: 100%;

  display: flex;

  padding: 0px 15%;

  align-items: center;
  justify-content: space-between;

  z-index: 15;
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
  height: calc(100vh - 150px);

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  z-index: 15;

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

    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
`;

export const SkillsContainer = styled.div`
  width: 100%;
  height: 600px;
  background-color: #7510f7;

  display: flex;

  align-items: center;
  justify-content: center;

  z-index: 15;
`;

export const EmptyContainer = styled.div`
  width: 100%;
  background-color: transparent;

  margin-top: -400px;

  display: flex;
  justify-content: center;

  z-index: 15;

  padding-bottom: 5rem;
`;

export const TerminalContainer = styled.div`
  width: 400px;
  height: 800px;

  background-color: #22212c;

  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const TerminalHeader = styled.div`
  display: flex;
  align-items: center;

  height: 2rem;

  padding: 0.5rem;

  span {
    width: 12px;
    height: 12px;
    border-radius: 6px;

    margin: 4px;
    background-color: #ffbd2e;
  }

  span:first-of-type {
    background-color: #ff5f56;
  }

  span:last-of-type {
    background-color: #27c93f;
  }
`;

export const TerminalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 1rem 2rem;

  color: #ffffff;

  text-align: center;

  img {
    height: 56px;
    width: 56px;
  }

  h2 {
    margin: 1rem 0;
  }

  div {
    font-family: "JetBrains Mono", monospace;
    color: #e1e1e6;
  }
`;

export const Purple = styled.span`
  color: #988bc7;
`;

export const Pink = styled.span`
  color: #ff79c6;
`;

export const Yellow = styled.span`
  color: #e7de79;
`;
