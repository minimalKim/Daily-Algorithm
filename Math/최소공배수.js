function getGCD(x, y) {
  return y > 0 ? getGCD(y, x % y) : x;
}

function solution(str) {
  const [n, ...arr] = str.split(/\n/);

  for (let i = 0; i < n; i++) {
    const [a, b] = arr[i]
      .split(' ')
      .map((char) => Number(char))
      .sort((a, b) => a - b);

    console.log((a * b) / getGCD(a, b));
  }
}

solution(`3
1 45000
6 10
13 17`);
