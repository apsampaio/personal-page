import P5 from "p5";

class GameOfLife {
  grid: number[][];
  cols: number;
  rows: number;
  resolution: number;

  p5: P5;

  constructor(p5: P5, cols: number, rows: number, resolution: number) {
    this.p5 = p5;
    this.resolution = resolution;
    this.cols = cols;
    this.rows = rows;
    this.grid = this.make2DArray(cols, rows);
  }

  public make2DArray = (cols: number, rows: number) =>
    [...new Array(cols)].map(() =>
      [...new Array(rows)].map(() => Math.floor(Math.random() * 2))
    );

  public countNeighbors = (
    x: number,
    y: number,
    cols: number,
    rows: number
  ) => {
    let sum = 0;

    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let col = (x + i + cols) % cols;
        let row = (y + j + rows) % rows;
        sum += this.grid[col][row];
      }
    }

    // subtract itself
    sum -= this.grid[x][y];
    return sum;
  };

  public show() {
    this.p5.background("#1d1d1f");

    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        let x = i * this.resolution;
        let y = j * this.resolution;
        if (this.grid[i][j] === 1) {
          this.p5.fill("#f8f8f8");
          this.p5.rect(x, y, this.resolution - 1, this.resolution - 1);
        }
      }
    }
    const next = this.make2DArray(this.cols, this.rows);

    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        let state = this.grid[i][j];

        const neighbors = this.countNeighbors(i, j, this.cols, this.rows);

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

    this.grid = next;
  }
}

export { GameOfLife };
