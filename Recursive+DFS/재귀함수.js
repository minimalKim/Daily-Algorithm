function pushNumber(num, stack) {
  if (num === 0) return;

  pushNumber(--num, stack);
  stack.push(num + 1);
}

function solution(char) {
  const arr = [];
  pushNumber(+char, arr);

  return arr.join(' ');
}

console.log(solution(`3`));
// 1 2 3
