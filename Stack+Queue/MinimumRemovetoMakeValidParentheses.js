// 1249. Minimum Remove to Make Valid Parentheses

const minRemoveToMakeValid = (s) => {
  const parenthesesIndexs = [];
  const chars = s.split('');

  chars.forEach((char, idx) => {
    if (char === '(') {
      parenthesesIndexs.push(idx);
    } else if (char === ')') {
      if (!parenthesesIndexs.length) chars[idx] = '';
      else parenthesesIndexs.pop();
    }
  });

  while (parenthesesIndexs.length) {
    const idx = parenthesesIndexs.pop();
    chars[idx] = '';
  }

  return chars.join('');
};

console.log(minRemoveToMakeValid('())()((('));
