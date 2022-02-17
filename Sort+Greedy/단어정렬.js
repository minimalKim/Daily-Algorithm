function solution(str) {
  const [_, ...strArr] = str.split('\n');
  const strSet = new Set(strArr);

  const sortedStr = [...strSet].sort((a, b) => {
    if (a.length === b.length) {
      return a.toUpperCase() < b.toUpperCase() ? -1 : 1;
    }
    return a.length - b.length;
  });

  return sortedStr.join('\n');
}

const input = `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`;

console.log(solution(input));
