function solution(postfix) {
  const stack = [];

  postfix.split('').forEach((char) => {
    if (!isNaN(char)) {
      stack.push(+char);
    } else {
      const [rt, lt] = [stack.pop(), stack.pop()];
      switch (char) {
        case '+':
          stack.push(lt + rt);
          break;
        case '-':
          stack.push(lt - rt);
          break;
        case '*':
          stack.push(lt * rt);
          break;
        case '/':
          stack.push(lt / rt);
      }
    }
  });
  return stack[0];
}

console.log(solution('352+*9-'));
// 12
