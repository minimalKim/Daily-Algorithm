// 198. House Robber
// 114 ms
const rob = (nums) => {
  for (let i = 2; i < nums.length; i++) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let j = i - 2; j >= 0; j--) {
      max = Math.max(max, nums[i] + nums[j]);
    }
    nums[i] = max;
  }

  return Math.max(...nums);
};

console.log(rob([2, 7, 9, 3, 1]));
