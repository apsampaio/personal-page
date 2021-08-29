import React, { useState } from "react";
import P5 from "p5";

import {
  Container,
  Canvas,
  Header,
  Logo,
  ContactButton,
  GreetContainer,
  SkillsContainer,
  EmptyContainer,
  TerminalContainer,
  TerminalHeader,
  TerminalBody,
} from "./styles";

import Code from "../../components/Code";

import LogoImage from "../../assets/moai.png";
import ProfileImage from "../../assets/profile.png";
import FrontEndImage from "../../assets/monitor-shimmer.svg";

import { GameOfLife } from "./GameOfLife";

let background: GameOfLife;

const frontEndCode = `{
  "languages": [
    "HTML",
    "CSS",
    "Pug",
    "SASS"
  ],
  "libs": [
    "React",
    "p5.js",
    "styled-components"
  ],
  "frameworks": [
    "Next.js",
    "Electron.js",
    "Bootstrap"
  ],
  "mobile": [
    "React Native",
    "Flutter"
  ],
  "tools": [
    "Expo",
    "Figma"
  ]
}`;

const About: React.FC = () => {
  const [animate, setAnimate] = useState(true);

  const setup = (p5: P5, canvasParentRef: any) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );

    // p5.frameRate(10);

    const resolution = 10;
    const cols = Math.floor(window.innerWidth / resolution);
    const rows = Math.floor(window.innerHeight / resolution);

    background = new GameOfLife(p5, cols, rows, resolution);
  };

  const draw = (p5: P5) => {
    if (background) background.show();
  };

  const handlewindowResize = (p5: P5) => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight);
  };

  const handleClick = (p5: P5) => {
    if (background) background.click();
  };

  return (
    <Container>
      {animate && (
        <Canvas
          draw={draw}
          setup={setup}
          windowResized={handlewindowResize}
          mousePressed={handleClick}
        />
      )}
      <Header>
        <Logo src={LogoImage} alt="moai" />
        <ContactButton>SAY HELLO</ContactButton>
      </Header>
      <GreetContainer>
        <h1>Front-end, Back-end & Mobile Developer</h1>
        <p>I find solutions and write some code.</p>
        <img src={ProfileImage} alt="profile" />
      </GreetContainer>
      <SkillsContainer></SkillsContainer>
      <EmptyContainer>
        <TerminalContainer>
          <TerminalHeader>
            <span />
            <span />
            <span />
          </TerminalHeader>
          <TerminalBody>
            <img src={FrontEndImage} alt="monitor-shimmer" color="#fff" />
            <h2>Front-end</h2>
            <p>I love design, but i'm not too much into client-side.</p>
            <Code>{frontEndCode}</Code>
          </TerminalBody>
        </TerminalContainer>
      </EmptyContainer>
    </Container>
  );
};

export { About };
