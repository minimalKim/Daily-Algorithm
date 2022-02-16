function solution(str) {
  const [_, ...coordinates] = str
    .split('\n')
    .map((el, idx) => (idx > 0 ? el.split(' ').map((char) => +char) : +el));

  const sortedCoordinates = coordinates.sort((a, b) =>
    a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
  );

  return sortedCoordinates.map((coordinate) => coordinate.join(' ')).join('\n');
}

const input = `5
3 4
1 1
1 -1
2 2
3 3`;

console.log(solution(input));
