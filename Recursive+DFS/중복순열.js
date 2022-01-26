function solution(str) {
  const [maxNum, capacity] = str.split(' ').map((char) => Number(char));
  const arr = Array.from({ length: capacity });
  const answer = [];

  function DFS(idx) {
    if (idx === capacity) {
      answer.push(arr.join(' '));
      return;
    }
    for (let i = 1; i <= maxNum; i++) {
      arr[idx] = i;
      DFS(idx + 1);
    }
  }

  DFS(0);
  return answer.join('\n').concat('\n', answer.length);
}

console.log(solution(`3 2`));
// 1  1
// 1  2
// 1  3
// 2  1
// 2  2
// 2  3
// 3  1
// 3  2
// 3  3
// 9
