function solution(str) {
  const arr = str
    .split('\n')
    .map((el) => el.split(' ').map((_el) => parseInt(_el)));
  const [n, m] = arr[0];
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 1; k <= m; k++) {
        let pi = (pj = 0);
        for (let s = 0; s < n; s++) {
          if (arr[k][s] === i) {
            pi = s;
          } else if (arr[k][s] === j) {
            pj = s;
          }
        }
        pi < pj ? cnt++ : '';
      }
      cnt === m ? answer++ : '';
    }
  }
  return answer;
}

let input = `4 3
3 4 1 2
4 3 2 1
3 1 4 2`;

console.log(solution(input));
