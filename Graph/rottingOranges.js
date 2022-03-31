// 994. Rotting Oranges
// BFS
// 100 ms

const orangesRotting = (grid) => {
  const queue = [];
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  const timeGrid = Array.from({ length: grid.length }, (_, i) =>
    Array.from({ length: grid[0].length }, (_, j) => {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
        return 0;
      } else if (grid[i][j] === 1) {
        return Number.MAX_SAFE_INTEGER;
      } else {
        return null;
      }
    })
  );

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) queue.push([i, j]);
    }
  }

  let time = 1;

  while (queue.length) {
    const [x, y] = queue.shift();
    if (timeGrid[x][y] === time) {
      time++;
    }
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && ny >= 00 && nx < grid.length && ny < grid[0].length) {
        if (grid[nx][ny] === 1) {
          queue.push([nx, ny]);
          timeGrid[nx][ny] = time;
          grid[nx][ny] = 2;
        }
      }
    }
  }

  if (grid.some((arr) => arr.some((num) => num === 1))) {
    return -1;
  }
  return time - 1;
};

const grid = [
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1],
];
console.log(orangesRotting(grid));
