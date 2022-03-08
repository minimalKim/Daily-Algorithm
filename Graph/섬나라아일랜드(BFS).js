function solution(str) {
  const [[length], ...board] = str
    .split('\n')
    .map((el) => el.split(' ').map((char) => +char));

  const dx = [-1, 0, 1, 1, 1, 0, -1, -1];
  const dy = [-1, -1, -1, 0, 1, 1, 1, 0];
  const queue = [];
  let counter = 0;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (board[i][j] === 1) {
        // 섬찾으면 시작
        board[i][j] = 0;
        queue.push([i, j]);

        while (queue.length) {
          let [x, y] = queue.shift();

          for (let k = 0; k < 8; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            if (
              nx >= 0 &&
              ny >= 0 &&
              nx < length &&
              ny < length &&
              board[nx][ny] === 1
            ) {
              board[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
        counter++;
        // BFS End
      }
    }
  }

  return counter;
}

const input = `7
1 1 0 0 0 1 0
0 1 1 0 1 1 0
0 1 0 0 0 0 0
0 0 0 1 0 1 1
1 1 0 1 1 0 0
1 0 0 0 1 0 0
1 0 1 0 1 0 0`; // 5

console.log(solution(input));
