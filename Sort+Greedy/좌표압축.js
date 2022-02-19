function solution(str) {
  const [_, coordinates] = str
    .split('\n')
    .map((sentence) => sentence.split(' '));

  const sortedCoordinates = [...new Set(coordinates)].sort((a, b) => a - b);

  // findIndex의 시간복잡도 : O(n) (시간초과)
  // const answer = coordinates
  //   .map((coordinate) => sortedCoordinates.findIndex((el) => el === coordinate))
  //   .join(' ');

  // Object key-value 의 시간복잡도 : O(1)
  const indexs = {};
  sortedCoordinates.forEach((coordinate, idx) => (indexs[coordinate] = idx));
  const answer = coordinates.map((coordinate) => indexs[coordinate]).join(' ');

  return answer;
}

const input = `5
2 4 -10 4 -9`;

console.log(solution(input));
