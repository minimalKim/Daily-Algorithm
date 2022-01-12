function solution(string) {
  const arr = string
    .split('\n')
    .map((str) => str.split(' ').map((char) => Number(char)));

  arr.shift();

  // bubbleSort
  // for (let i = 0; i < arr.length - 1; i++) {
  //   for (let j = 0; j < arr.length - i - 1; j++) {
  //     const [[leftX, leftY], [rightX, rightY]] = [arr[j], arr[j + 1]];

  //     if ((leftX > rightX) | (leftX === rightX) && leftY > rightY) {
  //       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  //     }
  //   }
  // }

  arr.sort((a, b) => {
    if (a[0] < b[0]) return a[0] - b[0];
    else if (a[0] === b[0]) return a[1] - b[1];
  });
  return arr.map((coordinate) => coordinate.join(' ')).join('\n');
}

console.log(
  solution(`3 3
  1 3
  2 3`)
);
// 1 2
// 1 3
// 2 5
// 2 7
// 3 6
