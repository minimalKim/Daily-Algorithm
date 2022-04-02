// 단어 변환
// DFS

const isDifferOneChar = (str1, str2) => {
  let findDiffer = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) findDiffer++;
  }

  return findDiffer === 1;
};

const solution = (begin, target, words) => {
  const visited = new Map();
  let min = Number.MAX_SAFE_INTEGER;

  const DFS = (level, word) => {
    if (level > words.length) {
      return;
    } else if (word === target) {
      min = Math.min(min, level);
      return;
    } else {
      for (const targetWord of words) {
        if (isDifferOneChar(word, targetWord) && !visited.has(targetWord)) {
          visited.set(targetWord, true);
          DFS(level + 1, targetWord);
          visited.delete(targetWord);
        }
      }
    }
  };

  DFS(0, begin);
  visited.set(begin, true);

  return min === Number.MAX_SAFE_INTEGER ? 0 : min;
};

console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']));
