function solution(str) {
  const [[size], ...board] = str
    .split('\n')
    .map((el) => el.split(' ').map((char) => +char));

  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  function DFS(x, y) {
    if (x === size - 1 && y === size - 1) {
      answer++;
    } else {
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (
          nx >= 0 &&
          nx < size &&
          ny >= 0 &&
          ny < size &&
          board[nx][ny] === 0
        ) {
          console.log(nx, ny);
          board[nx][ny] = 1;
          DFS(nx, ny);
          board[nx][ny] = 0;
        }
      }
    }
  }

  board[0][0] = 1;
  DFS(0, 0);
  return answer;
}

const input = `7
0 0 0 0 0 0 0
0 1 1 1 1 1 0
0 0 0 1 0 0 0
1 1 0 1 0 1 1
1 1 0 0 0 0 1
1 1 0 1 1 0 0
1 0 0 0 0 0 0`;
// 5

console.log(solution(input));
