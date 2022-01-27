function solution(str) {
  const nums = str.split(/ |\n/).map((char) => Number(char));
  const [length, capacity] = nums.splice(0, 2);
  const checks = Array.from({ length }, () => false);
  const temp = Array.from({ length: capacity });
  const answer = [];

  function DFS(level) {
    if (level === capacity) {
      answer.push(temp.join(' '));
      return;
    } else {
      for (let i = 0; i < length; i++) {
        if (checks[i]) continue;
        checks[i] = true;
        temp[level] = nums[i];
        DFS(level + 1);
        checks[i] = false;
      }
    }
  }

  DFS(0, 0);
  return answer.join('\n').concat('\n', answer.length);
}

console.log(
  solution(`3 2
3 6 9`)
);
// 3  6
// 3  9
// 6  3
// 6  9
// 9  3
// 9  6
// 6
