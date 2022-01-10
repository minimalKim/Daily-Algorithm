function solution(string) {
  const arr = string.split(' ').map((str) => Number(str));
  const sortedArr = [...arr].sort((a, b) => a - b);
  const answer = [];

  arr.forEach((num, idx) => {
    if (num !== sortedArr[idx]) answer.push(idx + 1);
  });

  return answer.join(' ');
}

console.log(solution(`120 125 152 130 135 135 143 127 160`));
// 3 8
