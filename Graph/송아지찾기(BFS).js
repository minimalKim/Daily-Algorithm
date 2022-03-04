function solution(str) {
  const [currentV, targetV] = str.split(' ').map((char) => +char);
  const queue = [];
  const check = Array.from({ length: 10001 }, () => false);
  const count = Array.from({ length: 10001 }, () => 0);

  queue.push(currentV);
  check[currentV] = true;
  count[currentV] = 0;

  while (queue.length) {
    let v = queue.shift();

    for (const nv of [v + 1, v - 1, v + 5]) {
      if (nv === targetV) {
        return count[v] + 1;
      }
      if (nv > 0 && nv <= 20 && !check[nv]) {
        queue.push(nv);
        check[nv] = true;
        count[nv] = count[v] + 1;
      }
    }
  }
}

console.log(solution('5 14'));
