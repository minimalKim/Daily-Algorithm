function solution(number) {
  let answer = '';
  function binary(number) {
    if (number === 0) return;
    answer += number % 2;
    binary(Math.floor(number / 2));
  }

  binary(number);
  return answer;
}

console.log(solution(11)); // 1011
