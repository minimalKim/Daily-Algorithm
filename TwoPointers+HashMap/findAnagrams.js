// 438. Find All Anagrams in a String
// T.C : O(M + N) M = s.length, N = p.length
// sliding window

const makeAnagramMap = (str) => {
  const map = new Map();
  for (const char of str) {
    map.set(char, map.get(char) + 1 || 1);
  }

  return map;
};

const findAnagrams = (s, p) => {
  const anagramMap = makeAnagramMap(p);
  const result = [];
  let [l, r] = [0, 0];
  let counter = p.length;

  while (r < s.length) {
    const char_left = s[l];
    const char_right = s[r];

    if (anagramMap.get(char_right) > 0) {
      counter--;
    }

    anagramMap.has(char_right)
      ? anagramMap.set(char_right, anagramMap.get(char_right) - 1)
      : anagramMap.set(char_right, -1);
    r++;

    if (counter === 0) {
      result.push(l);
    }

    if (r - l === p.length) {
      if (anagramMap.get(char_left) >= 0) {
        counter++;
      }
      anagramMap.set(char_left, anagramMap.get(char_left) + 1);
      l++;
    }
  }

  return result;
};

console.log(findAnagrams('cbaebabacd', 'abc'));
