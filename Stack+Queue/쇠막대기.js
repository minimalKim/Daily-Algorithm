function solution(str) {
  const stack = [];
  let answer = 0;

  str.split('').forEach((bracket, idx) => {
    switch (bracket) {
      case '(':
        stack.push(bracket);
        break;
      case ')':
        stack.pop();
        answer += str[idx - 1] === '(' ? stack.length : 1;
        break;
    }
  });
  return answer;
}

console.log(solution('(((()(()()))(())()))(()())'));
// 24
