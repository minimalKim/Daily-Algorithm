function solution(str) {
  const arr = str.split(' ').map((char) => Number(char));

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }

    for (let j = i; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
  return arr.join(' ');
}

function solution2(str) {
  const arr = str.split(' ').map((char) => Number(char));

  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = null;

    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = temp;
  }
  return arr.join(' ');
}

console.log(solution2(`1 2 3 -3 -2 5 6 -6`));
// -6 -3 -2 1 2 3 5 6
