function solution(str) {
  const [_, ...coordinates] = str
    .split('\n')
    .map((el, idx) => (idx > 0 ? el.split(' ').map((char) => +char) : +el));

  const sortedCoordinates = coordinates.sort((a, b) =>
    a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
  );

  return sortedCoordinates.map((coordinate) => coordinate.join(' ')).join('\n');
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
