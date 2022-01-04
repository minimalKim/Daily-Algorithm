function solution(str) {
  const stack = [];
  let lastBracket = '';
  let answer = 0;

  str.split('').forEach((bracket) => {
    switch (bracket) {
      case '(':
        stack.push(bracket);
        lastBracket = bracket;
        break;
      case ')':
        stack.pop();
        answer += lastBracket === '(' ? stack.length : 1;
        lastBracket = bracket;
        break;
    }
  });
  return answer;
}

console.log(solution('(((()(()()))(())()))(()())'));
// 24
