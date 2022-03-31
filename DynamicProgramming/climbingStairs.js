// 70. Climbing Stairs
// 84 ms
const climbStairs = (n) => {
  const steps = Array.from({ length: n + 1 }, () => 0);

  steps[1] = 1;
  steps[2] = 2;

  for (let i = 3; i <= n; i++) {
    steps[i] = steps[i - 1] + steps[i - 2];
  }

  return steps[n];
};

console.log(climbStairs(3));
