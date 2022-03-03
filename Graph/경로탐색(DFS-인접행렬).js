function solution(input) {
  const [[vertex, edge], ...coordinates] = input
    .split('\n')
    .map((str) => str.split(' ').map((char) => +char));

  const graph = Array.from({ length: vertex + 1 }, () =>
    new Array(vertex + 1).fill(0)
  );
  const check = Array.from({ length: vertex + 1 }, () => false);
  const path = [];
  let counter = 0;

  coordinates.forEach(([from, to]) => (graph[from][to] = 1));

  function DFS(v) {
    if (v === vertex) {
      console.log(path);
      counter++;
    }
    for (let i = 1; i <= vertex; i++) {
      if (graph[v][i] && !check[i]) {
        path.push(i);
        check[i] = true;
        DFS(i);
        check[i] = false;
        path.pop();
      }
    }
  }

  path.push(1);
  check[1] = true;
  DFS(1);

  return counter;
}

const input = `5 9
1 2
1 3
1 4
2 1
2 3
2 5
3 4
4 2
4 5`;

console.log(solution(input)); // 6
