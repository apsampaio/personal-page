import React from "react";
import P5 from "p5";

import { Container, Canvas, Header, Logo, ContactButton } from "./styles";
import { Particle } from "./draw";

import LogoImage from "../../assets/moai.png";

let particles: Particle[] = [];

const About: React.FC = () => {
  const draw = (p5: P5) => {
    p5.background("#1d1d1f");

    const mouseVector = p5.createVector(p5.mouseX, p5.mouseY);

    particles.map((particle) => {
      particle.attraction(mouseVector);
      particle.show();
      particle.update();
    });
  };

  const setup = (p5: P5, canvasParentRef: any) => {
    particles = [
      new Particle(
        p5,
        p5.random(0, window.innerWidth),
        p5.random(0, window.innerHeight)
      ),
      new Particle(
        p5,
        p5.random(0, window.innerWidth),
        p5.random(0, window.innerHeight)
      ),
      new Particle(
        p5,
        p5.random(0, window.innerWidth),
        p5.random(0, window.innerHeight)
      ),
      new Particle(
        p5,
        p5.random(0, window.innerWidth),
        p5.random(0, window.innerHeight)
      ),
      new Particle(
        p5,
        p5.random(0, window.innerWidth),
        p5.random(0, window.innerHeight)
      ),
      new Particle(
        p5,
        p5.random(0, window.innerWidth),
        p5.random(0, window.innerHeight)
      ),
      new Particle(
        p5,
        p5.random(0, window.innerWidth),
        p5.random(0, window.innerHeight)
      ),
      new Particle(
        p5,
        p5.random(0, window.innerWidth),
        p5.random(0, window.innerHeight)
      ),
    ];

    const canvas = p5
      .createCanvas(window.innerWidth, window.innerHeight)
      .parent(canvasParentRef);
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
