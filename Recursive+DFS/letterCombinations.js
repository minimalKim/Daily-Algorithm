// 17. Letter Combinations of a Phone Number
// -> DFS recursive
// 59 ms

const letterCombinations = (digits) => {
  const digitToChars = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  const result = [];
  const digitsArr = digits.split('').map((char) => +char);

  function DFS(level, strArr) {
    const digit = digitsArr[level];
    if (level === digitsArr.length) {
      if (strArr.length) {
        result.push(strArr.join(''));
      }
      return;
    }
    for (const char of digitToChars[digit]) {
      DFS(level + 1, [...strArr, char]);
    }
  }

  DFS(0, []);

  return result;
};

console.log(letterCombinations('23')); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations('')); // []
console.log(letterCombinations('2')); // ["a","b","c"]
