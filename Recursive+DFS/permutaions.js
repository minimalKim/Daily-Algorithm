// 46. Permutations
// 101 ms
const permute = (nums) => {
  const check = Array.from({ length: nums.length + 1 }, () => false);
  const permutes = [];

  const DFS = (arr) => {
    if (arr.length === nums.length) {
      permutes.push(arr);
      return;
    }
    for (const num of nums) {
      if (!check[num]) {
        check[num] = true;
        DFS([...arr, num]);
        check[num] = false;
      }
    }
  };

  DFS([]);
  return permutes;
};

console.log(permute([1, 2, 3]));
