// 344. Reverse String
// twoPointer
// O(n)
const reverseString = (s) => {
  let temp = null;
  let [i, j] = [0, s.length - 1];

  while (i < j) {
    temp = s[i];
    s[i++] = s[j];
    s[j--] = temp;
  }

  return s;
};

const str = ['h', 'e', 'l', 'l', 'o'];
console.log(reverseString(str));
