// 35. Search Insert Position
// -> binary search
// 87 ms

const searchInsert = (nums, target) => {
  let [lt, rt] = [0, nums.length - 1];

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    if (nums[mid] < target) {
      if (rt === mid) {
        return nums[rt] > target ? rt : rt + 1;
      }
      lt = mid + 1;
    } else if (nums[mid] > target) {
      if (lt === mid) {
        return nums[lt] > target ? lt : lt + 1;
      }
      rt = mid - 1;
    } else return mid;
  }
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 0));
console.log(searchInsert([1], 0));
console.log(searchInsert([1, 3], 0));
