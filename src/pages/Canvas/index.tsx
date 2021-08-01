import React from "react";
import Sketch from "react-p5";
import P5 from "p5";

const Canvas: React.FC = () => {
  const draw = (p5: P5) => {
    p5.background(0);
    p5.ellipse(p5.mouseX, p5.mouseY, 70, 70);
  };

  const setup = (p5: P5, canvasParentRef: any) => {
    const canvas = p5
      .createCanvas(window.innerWidth, window.innerHeight)
      .parent(canvasParentRef);
  };

  const handlewindowResize = (p5: P5) => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight);
  };

  return (
    <section>
      <Sketch draw={draw} setup={setup} windowResized={handlewindowResize} />
    </section>
  );
};

export { Canvas };
