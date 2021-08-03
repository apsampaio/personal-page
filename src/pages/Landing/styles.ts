import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const Background = styled.video`
  width: 100vw;
  height: 100vh;

  -o-object-fit: cover;
  object-fit: cover;
  background: linear-gradient(180deg, #1d1d1f 0%, #282a36 100%);

  filter: blur(7px) brightness(45%);
`;

export const Content = styled.div`
  z-index: 15;
  position: absolute;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  padding: 16px;

  text-align: center;
`;

export const Name = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1.2rem;
  color: white;

  border-bottom: 1px solid white;

  padding: 0px 0.5rem 0.5rem 0.5rem;
  margin-bottom: 0.5rem;
`;

export const Skill = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 3rem;
  color: white;

  margin-bottom: 0.5rem;
`;

export const Greeting = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  color: white;
`;

export const ContactButton = styled.button`
  display: block;
  position: relative;
  overflow: hidden;

  background: none;
  color: #fff;

  border: 3px solid #fff;
  border-radius: 5px;

  font-size: 1.6em;
  font-weight: bold;

  margin: 1em auto;
  padding: 0.5em 2em;

  transition: all 0.3s;

  text-transform: uppercase;

  &::before,
  &::after {
    transition: all 0.3s;
    background: #fff;
    content: "";
    position: absolute;
    z-index: -1;
  }

  &:hover {
    color: black;
    cursor: pointer;
  }

  &::after {
    height: 100%;
    left: -35%;
    top: 0;
    transform: skew(50deg);
    transition-duration: 0.6s;
    transform-origin: top left;
    width: 0;
  }

  &:hover:after {
    height: 100%;
    width: 135%;
  }
`;

export const About = styled(Link)`
  display: block;
  position: relative;
  overflow: hidden;

  background: none;
  color: #fff;

  font-size: 1.1em;
  font-weight: 400;

  padding: 0.5em 1em;

  transition: color 0.2s ease;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: #50fa7b;
  }
`;
