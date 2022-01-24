function solution(num) {
  const answer = [];
  const check = Array.from({ length: num + 1 });
  function DFS(v) {
    if (v >= num + 1) {
      answer.push(
        check
          .map((num, idx) => {
            if (num) return idx;
          })
          .filter((value) => !!value)
          .join(' ')
      );
      return;
    } else {
      check[v] = 1;
      DFS(v + 1);
      check[v] = 0;
      DFS(v + 1);
    }
  }

  DFS(1);
  return answer.join('\n');
}

console.log(solution(3));
// 1  2  3
// 1  2
// 1  3
// 1
// 2  3
// 2
// 3
