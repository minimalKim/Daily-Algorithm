function solution(str, accumulate = 1) {
  const number = Number(str);
  if (number <= 1) return accumulate;
  else return solution(number - 1, accumulate * number);
}

const input = `5`; //120

console.log(solution(input));
