function solution(str) {
  const arr = str.split(' ').map((char) => Number(char));

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr.join(' ');
}

console.log(solution(`13 5 11 7 23 15`));
