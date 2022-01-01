function solution(n, k, nums) {
  const sums = new Set();
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let z = j + 1; z < n; z++) {
        const sum = nums[i] + nums[j] + nums[z];
        sums.add(sum);
      }
    }
  }
  const sortedSums = [...sums].sort((a, b) => b - a);
  return sortedSums[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
