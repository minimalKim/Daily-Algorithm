// 153. Find Minimum in Rotated Sorted Array

const findMin = (nums) => {
  let [lt, rt] = [0, nums.length - 1];

  // sorted Array
  if (nums[lt] <= nums[rt]) {
    return nums[0];
  }

  // unsorted Array
  while (lt < rt) {
    const mid = Math.floor((lt + rt) / 2);
    if (nums[mid] > nums[lt]) {
      lt = mid;
    } else if (nums[mid] < nums[lt]) {
      rt = mid;
    } else {
      break;
    }
  }
  return nums[lt + 1];
};

console.log(findMin([11, 13, 15, 17]));
