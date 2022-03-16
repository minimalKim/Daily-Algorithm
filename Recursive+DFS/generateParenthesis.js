// 22. Generate Parentheses
// 77 ms
const generateParenthesis = (n) => {
  const result = [];

  function DFS(stack, count, leftPCount) {
    if (stack.length === n * 2) {
      return result.push(stack.join(''));
    }
    if (count === 0) {
      DFS([...stack, '('], count + 1, leftPCount + 1);
    } else if (leftPCount === n) {
      DFS([...stack, ')'], count, leftPCount);
    } else {
      DFS([...stack, '('], count + 1, leftPCount + 1);
      DFS([...stack, ')'], count - 1, leftPCount);
    }
  }

  DFS([], 0, 0);

  return result;
};

// refactor
// 64 ms
const generateParenthesis2 = (n) => {
  const result = [];

  const DFS = (stack, left, right) => {
    if (stack.length === n * 2) {
      return result.push(stack.join(''));
    }
    if (left < n) {
      DFS([...stack, '('], left + 1, right);
    }
    if (right < left) {
      DFS([...stack, ')'], left, right + 1);
    }
  };

  DFS([], 0, 0);

  return result;
};

console.log(generateParenthesis2(3));
