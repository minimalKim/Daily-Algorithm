function solution(str) {
  const [[capacity, pickedNum], nums, [divisor]] = str
    .split('\n')
    .map((el) => el.split(' ').map((char) => +char));

  const temp = Array.from({ length: pickedNum });
  let answer = 0;

  function DFS(level, idx, sum) {
    if (level === pickedNum) {
      if (sum % divisor === 0) answer++;
      return;
    }
    for (let i = idx; i < capacity; i++) {
      temp[level] = nums[i];
      // idx가 아니라 i가 인수로 들어가기!
      DFS(level + 1, i + 1, sum + nums[i]);
    }
  }

  DFS(0, 0, 0);

  return answer;
}

const input = `5 3
2 4 5 8 12
6`;
console.log(solution(input));
