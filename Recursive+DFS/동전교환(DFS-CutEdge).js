function solution(str) {
  const nums = str.split(/ |\n/).map((char) => Number(char));
  const [length, limit] = [nums.shift(), nums.pop()];
  let answer = Number.MAX_SAFE_INTEGER;

  function DFS(level, sum) {
    // Cut edge
    if (sum > limit || level >= answer) return;
    if (sum === limit) {
      answer = Math.min(answer, level);
      return;
    } else {
      for (let i = length - 1; i >= 0; i--) {
        DFS(level + 1, sum + nums[i]);
      }
    }
  }

  DFS(0, 0);

  return answer;
}

console.log(
  solution(`3
1 2 5
15`)
);
// 3
