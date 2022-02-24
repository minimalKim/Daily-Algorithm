//const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(str) {
  const [[numberLength], nums, operators] = str
    .split('\n')
    .map((str) => str.split(' ').map((char) => Number(char)));

  const results = [];
  let number = nums[0];

  function DFS(level) {
    if (level === numberLength) {
      results.push(number);
      return;
    }

    if (operators[0] > 0) {
      operators[0] -= 1;
      number += nums[level];
      DFS(level + 1);
      operators[0] += 1;
      number -= nums[level];
    }
    if (operators[1] > 0) {
      operators[1] -= 1;
      number -= nums[level];
      DFS(level + 1);
      operators[1] += 1;
      number += nums[level];
    }
    if (operators[2] > 0) {
      operators[2] -= 1;
      number *= nums[level];
      DFS(level + 1);
      operators[2] += 1;
      number /= nums[level];
    }
    if (operators[3] > 0) {
      operators[3] -= 1;
      let tempNum = number;
      number = parseInt(number / nums[level]);
      DFS(level + 1);
      operators[3] += 1;
      number = tempNum;
    }
  }

  DFS(1);
  return [Math.max(...results), Math.min(...results)].join('\n');
}

// refactor
function solution2(str) {
  const [[numberLength], nums, operators] = str
    .split('\n')
    .map((str) => str.split(' ').map((char) => Number(char)));

  const results = [];

  function DFS(level, number) {
    if (level === numberLength) {
      results.push(number);
      return;
    }

    if (operators[0] > 0) {
      operators[0] -= 1;
      DFS(level + 1, number + nums[level]);
      operators[0] += 1;
    }
    if (operators[1] > 0) {
      operators[1] -= 1;
      DFS(level + 1, number - nums[level]);
      operators[1] += 1;
    }
    if (operators[2] > 0) {
      operators[2] -= 1;
      DFS(level + 1, number * nums[level]);
      operators[2] += 1;
    }
    if (operators[3] > 0) {
      operators[3] -= 1;
      DFS(level + 1, parseInt(number / nums[level]));
      operators[3] += 1;
    }
  }

  DFS(1, nums[0]);
  return [Math.max(...results), Math.min(...results)].join('\n');
}

const input = `6
1 2 3 4 5 6
2 1 1 1`;

console.log(solution(input));
