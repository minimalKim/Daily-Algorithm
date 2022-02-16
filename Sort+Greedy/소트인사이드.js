function solution(str) {
  const numArr = [];
  let num = Number(str);
  while (num > 0) {
    numArr.push(num % 10);
    num = parseInt(num / 10);
  }
  return numArr.sort((a, b) => b - a).join('');
}

const input = `999998999`;

console.log(solution(input));
