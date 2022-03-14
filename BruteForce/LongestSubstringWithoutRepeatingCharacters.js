// 3. Longest Substring Without Repeating Characters
const lengthOfLongestSubstring = function (s) {
  let stack = [];
  let maxNum = 0;

  for (const char of s) {
    if (stack.includes(char)) {
      stack.splice(0, stack.findIndex((num) => num === char) + 1);
    }
    stack.push(char);
    maxNum = Math.max(maxNum, stack.length);
  }

  return maxNum;
};
