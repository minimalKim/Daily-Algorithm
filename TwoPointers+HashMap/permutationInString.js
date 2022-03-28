// 567. Permutation in String
// sliding window
// 143 ms
const checkInclusion = (s1, s2) => {
  const dictionary = new Map();

  if (s1.length > s2.length) return false;

  for (const char of s1) {
    dictionary.set(char, dictionary.has(char) ? dictionary.get(char) + 1 : 1);
  }

  for (let i = 0; i < s1.length; i++) {
    const char = s2[i];
    if (!dictionary.has(char)) continue;
    else dictionary.set(char, dictionary.get(char) - 1);
  }

  if ([...dictionary.values()].every((num) => num === 0)) return true;

  let [lt, rt] = [0, s1.length];

  while (rt < s2.length) {
    const newChar = s2[rt++];
    const prevChar = s2[lt++];

    if (!dictionary.has(newChar)) {
      if (dictionary.has(prevChar))
        dictionary.set(prevChar, dictionary.get(prevChar) + 1);
      continue;
    } else if (dictionary.has(newChar))
      dictionary.set(newChar, dictionary.get(newChar) - 1);

    if (dictionary.has(prevChar))
      dictionary.set(prevChar, dictionary.get(prevChar) + 1);
    if ([...dictionary.values()].every((num) => num === 0)) return true;
  }

  return false;
};

// brute force
// bad..
let result = false;

const swap = (s, lt, rt) => {
  if (lt === rt) return s;
  const s1 = s.substring(0, lt);
  const s2 = s.substring(lt + 1, rt);
  const s3 = s.substring(rt + 1);
  return s1 + s.charAt(rt) + s2 + s.charAt(lt) + s3;
};

const permute = (s1, s2, num) => {
  if (num === s1.length) {
    if (s2.indexOf(s1) >= 0) result = true;
  } else {
    for (let i = num; i < s1.length; i++) {
      console.log(s1);
      s1 = swap(s1, num, i);
      permute(s1, s2, num + 1);
      s1 = swap(s1, num, i);
    }
  }
};

const checkInclusion2 = (s1, s2) => {
  permute(s1, s2, 0);
  return result;
};

console.log(checkInclusion('ab', 'eidboaoo'));
