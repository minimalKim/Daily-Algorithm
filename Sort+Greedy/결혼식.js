function solution(string) {
  const visitors = string.split('\n').map((str) =>
    str
      .trim()
      .split(' ')
      .map((char) => Number(char))
  );
  visitors.shift();

  const sortedVisitors = visitors.sort((a, b) =>
    a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
  );
  const leaveTimes = [0];
  let maxVisitor = 0;

  for (const visitor of sortedVisitors) {
    const earlyVisitorLeaveTime = leaveTimes[0];
    const [visitTime, leaveTime] = visitor;

    if (earlyVisitorLeaveTime <= visitTime) leaveTimes.shift();
    leaveTimes.push(leaveTime);
    maxVisitor =
      maxVisitor < leaveTimes.length ? leaveTimes.length : maxVisitor;
  }

  return maxVisitor;
}

console.log(
  solution(`5
  14 18
  12 15
  15 20
  20 30
  5 14`)
);
// 2

console.log(
  solution(`5
  14 18
  14 16
  14 17
  14 15
  14 19`)
);
// 5
