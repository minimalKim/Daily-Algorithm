function solution(str) {
  const arr = str.split('\n').map((char) => Number(char));
  arr.shift();
  const sortedArr = arr.sort((a, b) => a - b);

  return [...new Set(sortedArr)].join('\n');
}

console.log(
  solution(`5
  5
  2
  3
  4
  1`)
);
