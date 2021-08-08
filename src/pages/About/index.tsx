import React from "react";
import P5 from "p5";

import { Container, Canvas, Header, Logo, ContactButton } from "./styles";
import LogoImage from "../../assets/moai.png";

import { countNeighbors, make2DArray } from "./Background";

let grid: number[][] = [];
const resolution = 5;
let cols: number;
let rows: number;

const About: React.FC = () => {
  const setup = (p5: P5, canvasParentRef: any) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );

    cols = Math.floor(window.innerWidth / resolution);
    rows = Math.floor(window.innerHeight / resolution);

    grid = make2DArray(cols, rows);
  };

  const draw = (p5: P5) => {
    p5.background("#1d1d1f");

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * resolution;
        let y = j * resolution;
        if (grid[i][j] === 1) {
          p5.fill(255);
          p5.rect(x, y, resolution - 1, resolution - 1);
        }
      }
    }
    const next = make2DArray(cols, rows);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let state = grid[i][j];

        const neighbors = countNeighbors(grid, i, j, cols, rows);

        if (state === 0 && neighbors === 3) {
          // If there is 3 neighbors, create life
          next[i][j] = 1;
        } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
          // If there is less than 3 neighbors or more than 3, dies
          next[i][j] = 0;
        } else {
          next[i][j] = state;
        }
      }
    }

    grid = next;
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
