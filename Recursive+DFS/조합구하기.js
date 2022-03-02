function solution(str) {
  const [maxNum, capacity] = str.split(' ').map((char) => +char);
  const combinations = [];

  function recursive(level, num, combination) {
    if (level === capacity) {
      combinations.push([...combination].join(' '));
      return;
    }
    for (let i = 1; i <= maxNum; i++) {
      if (i <= num) continue;
      combination.push(i);
      recursive(level + 1, i, combination);
      combination.pop();
    }
  }
  recursive(0, 0, []);

  return [combinations.join('\n'), combinations.length].join('\n');
}

// refactor

function solution2(str) {
  const [maxNum, capacity] = str.split(' ').map((char) => +char);
  const combinations = [];
  const temp = Array.from({ length: capacity }, () => null);

  function recursive(level, num) {
    if (level === capacity) {
      combinations.push([...temp].join(' '));
      return;
    }
    for (let i = num; i <= maxNum; i++) {
      temp[level] = i;
      recursive(level + 1, i + 1);
    }
  }
  recursive(0, 1);

  return [combinations.join('\n'), combinations.length].join('\n');
}

const input = `4 2`;

console.log(solution2(input));
// 1  2
// 1  3
// 1  4
// 2  3
// 2  4
// 3  4
// 6
