// 가장 먼 노드
// reference
const BFS = (start, arr, end) => {
  // 시작값, 탐색할 배열, 길이
  const visited = new Array(end + 1).fill(false);
  const distances = new Array(end + 1).fill(0);
  const queue = [start];
  visited[start] = true;

  while (queue.length) {
    const number = queue.shift();
    const distance = distances[number] + 1;

    // 무방향 그래프 arr이므로 양방향 체크
    for (const [from, to] of arr) {
      if (from === number && !visited[to]) {
        queue.push(to);
        visited[to] = true;
        distances[to] = distance;
      } else if (to === number && !visited[from]) {
        queue.push(from);
        visited[from] = true;
        distances[from] = distance;
      }
    }
  }

  const maxDistance = Math.max(...distances);
  return distances.filter((distance) => distance === maxDistance).length;
};

const solution = (n, vertex) => {
  return BFS(1, vertex, n);
};

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
