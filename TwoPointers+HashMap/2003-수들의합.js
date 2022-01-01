function solution(str) {
  const [[n, m], arr] = str
    .split(/\n/)
    .map((el) => el.split(' ').map((str) => parseInt(str, 10)));

  let answer = 0,
    lt = 0,
    sum = 0;
  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];
    if (sum === m) {
      answer++;
    }
    while (sum >= m) {
      console.log(sum, arr[lt], arr[rt]);
      sum -= arr[lt++];
      if (sum === m) {
        answer++;
      }
    }
  }

  return answer;
}
