import React from "react";
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
} from "./styles";

import { Terminal } from "../../components/Terminal";

import LogoImage from "../../assets/moai.png";
import ProfileImage from "../../assets/profile.png";

import FrontEndImage from "../../assets/monitor-shimmer.svg";
import BackEndImage from "../../assets/server.svg";
import CodeEndImage from "../../assets/code.svg";

import { Segment, SegmentChild } from "./Segments";
const tentacleLength = 50;
let tentacles: Segment[] = [];
let cursor: P5.Vector;

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

const backEndCode = `{
  "languages": [
    "TypeScript",
    "Python"
  ],
  "runtime": [
    "Node.js"
  ],
  "libs": [
    "Jest",
    "Socket.IO"
  ],
  "frameworks": [
    "Express",
    "Django"
  ],
  "databases": [
    "MongoDB",
    "Postgres",
    "MySQL",
    "Redis",
    "SQLite"
  ],
  "tools": [
    "Docker",
    Firebase: [
      "Authentication",
      "Firestore",
      "Realtime Database",
      "Functions"
    ],
    "RabbitMQ",
    "Insomnia"
  ]
}`;

const codeEndCode = `{
  "languages": [
    "C",
    "Embedded C",
    "Embedded Assembly",
    "C++",
  ],
  "tools": [
    "Arduino",
    "Raspberry Pi",
    "Git",
  ]
}`;

const About: React.FC = () => {
  const setup = (p5: P5, canvasParentRef: any) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );

    const mouseVector = p5.createVector(p5.mouseX, p5.mouseY);
    cursor = p5.createVector(mouseVector.x, mouseVector.y);

    tentacles[0] = new Segment(
      p5,
      mouseVector.x,
      mouseVector.y,
      3,
      0,
      tentacleLength
    );
    for (let i = 1; i < tentacleLength; i++) {
      tentacles[i] = new SegmentChild(
        p5,
        tentacles[i - 1],
        3,
        i,
        tentacleLength
      );
    }
  };

  const draw = (p5: P5) => {
    p5.background("#191622");

    let total = tentacles.length;
    let end = tentacles[total - 1];

    end.follow(cursor);
    end.update();
    end.show();

    for (let i = total - 2; i >= 0; i--) {
      const { a: childA } = tentacles[i + 1];
      tentacles[i].follow(childA);
      tentacles[i].update();
      tentacles[i].show();
    }
  };

  const handlewindowResize = (p5: P5) => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight);
  };

  const handleMouseMove = (p5: P5) => {
    if (cursor) cursor.set(p5.mouseX, p5.mouseY);
  };

  return (
    <Container>
      {/* <Canvas
        draw={draw}
        setup={setup}
        windowResized={handlewindowResize}
        mouseMoved={handleMouseMove}
      /> */}
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
        <Terminal
          image={BackEndImage}
          title="Back-end"
          subtitle="My favorite behind-the-scenes."
          code={backEndCode}
        />
        <Terminal
          image={FrontEndImage}
          title="Front-end"
          subtitle="I love design, but i'm not too much into client-side."
          code={frontEndCode}
        />
        <Terminal
          image={CodeEndImage}
          title="Code"
          subtitle="Other technologies in my code journey."
          code={codeEndCode}
        />
      </EmptyContainer>
    </Container>
  );
};

export { About };
