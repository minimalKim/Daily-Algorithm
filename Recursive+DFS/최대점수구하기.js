function solution(str) {
  const nums = str
    .split(/\n/)
    .map((el) => el.split(' ').map((char) => Number(char)));

  const [length, timeLimit] = nums.splice(0, 1)[0];
  const scores = [];

  function DFS(idx, score, time) {
    if (time > timeLimit) return;
    if (idx >= length) {
      scores.push(score);
      return;
    } else {
      DFS(idx + 1, score + nums[idx][0], time + nums[idx][1]);
      DFS(idx + 1, score, time);
    }
  }

  DFS(0, 0, 0);

  return Math.max(...scores);
}

//----//

function solution2(str) {
  const nums = str
    .split(/\n/)
    .map((el) => el.split(' ').map((char) => Number(char)));

  const [length, timeLimit] = nums.splice(0, 1)[0];
  let answer = Number.MIN_SAFE_INTEGER;

  function DFS(idx, score, time) {
    if (time > timeLimit) return;
    if (idx >= length) {
      answer = Math.max(answer, score);
      return;
    } else {
      DFS(idx + 1, score + nums[idx][0], time + nums[idx][1]);
      DFS(idx + 1, score, time);
    }
  }

  DFS(0, 0, 0);

  return answer;
}

console.log(
  solution2(`5 20
10 5
25 12
15 8
6 3
7 4`)
); // 41
