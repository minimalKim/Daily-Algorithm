// 77. Combinations
// 431 ms
const combine = (n, k) => {
  const check = Array.from({ length: n + 1 }, () => false);
  const combinations = [];

  const DFS = (combi) => {
    if (combi.length === k) {
      combinations.push(combi);
      return;
    }
    for (let i = 1; i <= n; i++) {
      if ((combi[combi.length - 1] || 0) < i && !check[i]) {
        check[i] = true;
        DFS([...combi, i]);
        check[i] = false;
      }
    }
  };

  DFS([]);

  return combinations;
};

// reference
// 111ms
const combine2 = function (n, k) {
  if (k === 1) {
    return Array(n)
      .fill(0)
      .map((_, index) => [index + 1]);
  }
  if (n === k) {
    return [
      Array(n)
        .fill(0)
        .map((_, index) => index + 1),
    ];
  }
  return combine2(n - 1, k).concat(
    combine2(n - 1, k - 1).map((item) => [n, ...item])
  );
};

console.log(combine(4, 2));
