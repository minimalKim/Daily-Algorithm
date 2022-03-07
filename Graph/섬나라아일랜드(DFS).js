function solution(str) {
  const [[length], ...board] = str
    .split('\n')
    .map((el) => el.split(' ').map((char) => +char));

  const dx = [-1, 0, 1, 1, 1, 0, -1, -1];
  const dy = [-1, -1, -1, 0, 1, 1, 1, 0];
  let counter = 0;

  function DFS(x, y) {
    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < length &&
        ny < length &&
        board[nx][ny] === 1
      ) {
        console.log(nx, ny);
        board[nx][ny] = 0;
        DFS(nx, ny);
      }
    }
  }

  // board[0][0] = 0;
  // DFS(0, 0);
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        DFS(i, j);
        counter++;
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
