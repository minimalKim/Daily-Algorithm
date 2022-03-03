function solution(input) {
  const [[vertex, edge], ...coordinates] = input
    .split('\n')
    .map((str) => str.split(' ').map((char) => +char));

  const graph = Array.from({ length: vertex + 1 }, () => []);
  const check = Array.from({ length: vertex + 1 }, () => false);
  const path = [];
  let counter = 0;

  coordinates.forEach(([from, to]) => graph[from].push(to));

  function DFS(v) {
    if (v === vertex) {
      console.log(path);
      counter++;
    }
    for (let i = 0; i < graph[v].length; i++) {
      const newV = graph[v][i];

      if (newV && !check[newV]) {
        path.push(newV);
        check[newV] = true;
        DFS(newV);
        check[newV] = false;
        path.pop();
      }
    }
  }

  path.push(1);
  check[1] = true;
  DFS(1);

  return counter;
}

// refactor

function solution2(input) {
  const [[vertex, edge], ...coordinates] = input
    .split('\n')
    .map((str) => str.split(' ').map((char) => +char));

  const graph = Array.from({ length: vertex + 1 }, () => []);
  const check = Array.from({ length: vertex + 1 }, () => false);
  const path = [];
  let counter = 0;

  coordinates.forEach(([from, to]) => graph[from].push(to));

  function DFS(v) {
    if (v === vertex) {
      console.log(path);
      counter++;
    }
    for (const to of graph[v]) {
      if (to && !check[to]) {
        check[to] = true;
        path.push(to);
        DFS(to);
        path.pop();
        check[to] = false;
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

console.log(solution2(input)); // 6
