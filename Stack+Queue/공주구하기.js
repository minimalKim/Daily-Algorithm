function solution(str) {
  const [n, k] = str.split(' ').map((char) => +char);
  const stack = Array.from({ length: n }, (_, idx) => idx + 1);
  let counter = 1;

  while (stack.length > 1) {
    counter++ % k ? stack.push(stack.shift()) : stack.shift();
  }
  return stack[0];
}

console.log(solution('8 3'));
// 7
