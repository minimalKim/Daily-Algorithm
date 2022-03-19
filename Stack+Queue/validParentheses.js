// 20. Valid Parentheses
// 77 ms
const isValid = (s) => {
  const parentheses = s.split('');
  const check = new Map();
  const left = ['(', '{', '['];
  const right = [')', '}', ']'];
  const stack = [];

  for (const parenthesis of parentheses) {
    if (left.includes(parenthesis)) {
      check.set(parenthesis, check.get(parenthesis) + 1 || 1);
      stack.push(parenthesis);
    }
    if (right.includes(parenthesis)) {
      const matchedLeft = left[right.indexOf(parenthesis)];
      if (!check.get(matchedLeft) || stack.pop() !== matchedLeft) {
        return false;
      }
      check.set(matchedLeft, check.get(matchedLeft) - 1);
    }
  }

  if ([...check.values()].some((num) => num > 0)) return false;

  return true;
};
console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('"([)]"'));
