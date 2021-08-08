import React from "react";
import P5 from "p5";

import { Container, Canvas, Header, Logo, ContactButton } from "./styles";
import LogoImage from "../../assets/moai.png";

import { GameOfLife } from "./GameOfLife";

let background: GameOfLife;

const About: React.FC = () => {
  const setup = (p5: P5, canvasParentRef: any) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );

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

  return (
    <Container>
      <Canvas draw={draw} setup={setup} windowResized={handlewindowResize} />
      <Header>
        <Logo src={LogoImage} alt="moai" />
        <ContactButton>SAY HELLO</ContactButton>
      </Header>
    </Container>
  );
};

export { About };
