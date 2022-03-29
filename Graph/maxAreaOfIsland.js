// 695. Max Area of Island
// BFS
// 109 ms
const maxAreaOfIsland = (grid) => {
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];
  const queue = [];
  let maxArea = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const tile = grid[i][j];
      let counter = 0;
      if (tile === 1) {
        queue.push([i, j]);
        grid[i][j] = 0;
      }

      while (queue.length) {
        const [x, y] = queue.shift();
        counter++;

        for (let i = 0; i < 4; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];

          if (
            nx >= 0 &&
            ny >= 0 &&
            nx < grid.length &&
            ny < grid[0].length &&
            grid[nx][ny] === 1
          ) {
            queue.push([nx, ny]);
            grid[nx][ny] = 0;
          }
        }
      }
      maxArea = Math.max(maxArea, counter);
      counter = 0;
    }
  }

  return maxArea;
};

const grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1],
];

console.log(maxAreaOfIsland(grid)); // 4
