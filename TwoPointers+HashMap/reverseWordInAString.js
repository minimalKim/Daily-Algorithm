// 557. Reverse Words in a String III
// 130 ms

const reverse = (arr) => {
  let [i, j] = [0, arr.length - 1];
  let temp = '';
  while (i < j) {
    temp = arr[i];
    arr[i++] = arr[j];
    arr[j--] = temp;
  }

  return arr;
};

const reverseWords = (s) => {
  const sStack = [];
  let temp = '';

  for (let i = s.length; i--; i >= 0) {
    const char = s[i];
    if (char === ' ') {
      sStack.push(temp);
      temp = '';
    } else {
      temp += char;
      if (i === 0) sStack.push(temp);
    }
  }

  return reverse(sStack).join(' ');
};

const s = "Let's take LeetCode contest";
const s2 = 'God';

console.log(reverseWords(s2)); // "s'teL ekat edoCteeL tsetnoc"
