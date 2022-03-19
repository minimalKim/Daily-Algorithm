// 14. Longest Common Prefix
// 99 ms
const longestCommonPrefix = (strs) => {
  const maxPrefix = [];

  for (let i = 0; i < Math.min(...strs.map((str) => str.length)); i++) {
    const charOfStrs = strs.map((str) => str.split('')[i]);
    const isSameChar = charOfStrs.every((char) => char === charOfStrs[0]);
    if (isSameChar) maxPrefix.push(charOfStrs[0]);

    if (!isSameChar) break;
  }

  return maxPrefix.join('');
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // 'fl'
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ''
