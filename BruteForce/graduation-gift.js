function sum(arr) {
  return arr.reduce((prev, curr) => prev + curr);
}

function solution(budget, list) {
  let answer = 0;
  list = list.sort((a, b) => sum(a) - sum(b));

  for (let i = 0; i < list.length; i++) {
    const [product, shipping] = arr[i];
    let rest = budget - (product / 2 + shipping);
    let cnt = 1;

    for (let j = 0; j < list.length; j++) {
      const cost = arr[j][0] + arr[j][1];

      if (i === j) {
        continue;
      } else if (rest < cost) {
        break;
      }
      rest -= cost;
      cnt++;
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
