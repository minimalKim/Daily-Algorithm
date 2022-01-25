function solution(str) {
  const nums = str
    .split('\n')[1]
    .split(' ')
    .map((char) => Number(char));

  const subset = Array.from({ length: nums.length });
  const sumOfNums = nums.reduce((a, b) => a + b);
  let answer = 'NO';

  function DFS(idx) {
    if (answer === 'YES') return;
    if (idx >= nums.length) {
      if (sumOfNums / 2 === subset.reduce((a, b) => a + b)) answer = 'YES';
      return;
    } else {
      subset[idx] = 0;
      DFS(idx + 1);
      subset[idx] = nums[idx];
      DFS(idx + 1);
    }
  }

  DFS(0);
  return answer;
}

console.log(
  solution(`6
1 3 5 6 7 10`)
);
