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
// Instead of adding '(' or ')' every time as in Approach 1, let's only add them when we know it will remain a valid sequence. We can do this by keeping track of the number of opening and closing brackets we have placed so far.
// We can start an opening bracket if we still have one (of n) left to place. And we can start a closing bracket if it would not exceed the number of opening brackets.
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
