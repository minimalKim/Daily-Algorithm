// 34. Find First and Last Position of Element in Sorted Array
// -> binary search
// O(logn)
// reference
const searchRange = (nums, target) => {
  let [lt, rt] = [0, nums.length - 1];
  let [start, end] = [-1, -1];

  // find start
  while (lt < rt) {
    let mid = Math.floor((lt + rt) / 2);
    const midNum = nums[mid];
    if (midNum < target) lt = mid + 1;
    else rt = mid;
  }
  if (nums[lt] !== target) return [start, end];
  start = lt;

  // find end
  rt = nums.length - 1;
  while (lt < rt) {
    let mid = Math.ceil((lt + rt) / 2);
    const midNum = nums[mid];
    if (midNum > target) rt = mid - 1;
    else lt = mid;
  }
  end = rt;
  return [start, end];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3,4]
console.log(searchRange([5, 7, 7, 8, 8, 8, 8, 8, 10], 8)); // [3,7]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1,-1]
console.log(searchRange([], 0)); // [-1,-1]
console.log(searchRange([1], 1)); // [0,0]
console.log(searchRange([1], 0)); // [-1,-1]
