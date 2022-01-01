const solution = (s) => {
  let counter = 0;
  let answer = true;
  s.split('').forEach((bracket) => {
    bracket === '(' ? counter++ : counter--;
    if (counter < 0) answer = false;
  });

  if (counter !== 0) answer = false;
  return answer;
};

// 좌측 괄호 ( (counter++), 우측 괄호 ) (counter--)가 있을 때,
// 1. 우측괄호 )의 갯수가 좌측괄호의 갯수보다 클 시 (음수가 되었을 시) -> false
// 2. 총 좌측괄호의 갯수와 우측괄호의 갯수가 같지 않을 시 (0이 아닐 시) -> false
