function solution(str) {
  const [[kindNum], coins, [change]] = str
    .split('\n')
    .map((el) => el.split(' ').map((char) => +char));

  let dy = Array.from({ length: kindNum }, () =>
    Array.from({ length: change + 1 }, () => 0)
  );

  for (let i = 0; i < kindNum; i++) {
    for (let j = 1; j <= change; j++) {
      const quotient = parseInt(j / coins[i]);
      let min = Number.MAX_SAFE_INTEGER;

      if (i < 1 && change % coins[i] === 0) {
        dy[i][j] = quotient;
        continue;
      } else if (dy[i - 1][j]) {
        min = dy[i - 1][j];
      }
      if (min > quotient + dy[i - 1][j - coins[i] * quotient]) {
        min = quotient + dy[i - 1][j - coins[i] * quotient];
      }
      dy[i][j] = min;
    }
  }
  return dy[kindNum - 1][change];
}

// refactor

function solution2(str) {
  const [[kindNum], coins, [change]] = str
    .split('\n')
    .map((el) => el.split(' ').map((char) => +char));

  let dy = Array.from({ length: change + 1 }, () => Number.MAX_SAFE_INTEGER);
  dy[0] = 0;

  for (let i = 0; i < kindNum; i++) {
    const coin = coins[i];
    for (let j = coin; j <= change; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin] + 1);
    }
  }

  return dy.pop();
}

const input = `3
1 2 5
15`; // 3

console.log(solution2(input));
