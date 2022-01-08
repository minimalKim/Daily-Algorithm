function solution(str) {
  const arr = str.split(' ').map((char) => Number(char));

  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr.join(' ');
}

console.log(solution(`1 2 3 -3 -2 5 6 -6`));
// -3 -2 -6 1 2 3 5 6
