function solution(n, arr) {
  let answer = (sum = lt = rt = 0);

  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];

    while (sum > n) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }

  return answer;
}
const a = [1, 3, 1, 2, 3];

console.log(solution(5, a));
