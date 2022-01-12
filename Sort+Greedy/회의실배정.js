function solution(string) {
  const reservations = string.split('\n').map((str) =>
    str
      .trim()
      .split(' ')
      .map((char) => Number(char))
  );

  reservations.shift();

  let fixedEndTime = 0;
  let counter = 0;

  reservations.sort((a, b) => {
    // 끝나는 시간이 같을 경우 시작 시간 순으로 정렬
    if (a[1] === b[1]) return a[0] - b[0];
    // 끝나는 시간 순으로 정렬
    return a[1] - b[1];
  });

  for (let i = 0; i < reservations.length; i++) {
    const [startTime, endTime] = reservations[i];
    if (startTime >= fixedEndTime) {
      fixedEndTime = endTime;
      counter++;
    }
  }

  return counter;
}

console.log(
  solution(`5
  1 4
  2 3
  3 5
  4 6
  5 7`)
);
// 3

console.log(
  solution(`3
  3 3
  1 3
  2 3`)
);
// 2
