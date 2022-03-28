// 733. Flood Fill
// BFS
// 129 ms
const floodFill = (image, sr, sc, newColor) => {
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];
  const queue = [];

  queue.push([sr, sc]);
  const prevColor = image[sr][sc];
  if (prevColor === newColor) return image;
  image[sr][sc] = newColor;

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < image.length &&
        ny < image[0].length &&
        image[nx][ny] === prevColor
      ) {
        image[nx][ny] = newColor;
        queue.push([nx, ny]);
      }
    }
  }

  return image;
};

const image = [
  [0, 0, 0],
  [0, 1, 1],
];

console.log(floodFill(image, 1, 1, 1));
