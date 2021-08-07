import React from "react";
import P5 from "p5";

import { Container, Canvas, Header, Logo, ContactButton } from "./styles";
import { Segment, SegmentChild } from "./Segments";

import LogoImage from "../../assets/moai.png";

const tentacleLength = 50;
let tentacles: Segment[] = [];
let cursor: P5.Vector;

const About: React.FC = () => {
  const setup = (p5: P5, canvasParentRef: any) => {
    const startX = p5.windowWidth / 2;
    const startY = p5.windowHeight / 2;

    cursor = p5.createVector(startX, startY);

    tentacles[0] = new Segment(p5, startX, startY, 3, 0, tentacleLength);
    for (let i = 1; i < tentacleLength; i++) {
      tentacles[i] = new SegmentChild(
        p5,
        tentacles[i - 1],
        3,
        i,
        tentacleLength
      );
    }

    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );
  };

  const draw = (p5: P5) => {
    p5.background("#1d1d1f");

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
      <Canvas
        draw={draw}
        setup={setup}
        windowResized={handlewindowResize}
        mouseMoved={handleMouseMove}
      />
      <Header>
        <Logo src={LogoImage} alt="moai" />
        <ContactButton>SAY HELLO</ContactButton>
      </Header>
    </Container>
  );
};

export { About };
