const make2DArray = (cols: number, rows: number) =>
  [...new Array(cols)].map(() =>
    [...new Array(rows)].map(() => Math.floor(Math.random() * 2))
  );

const countNeighbors = (
  grid: number[][],
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
      sum += grid[col][row];
    }
  }

  // subtract itself
  sum -= grid[x][y];
  return sum;
};

export { make2DArray, countNeighbors };
