// 162. Find Peak Element

const findPeakElement = (nums) => {
  let [lt, rt] = [0, nums.length - 1];

  if (nums.length <= 2) {
    if (nums[lt] > nums[rt]) {
      return lt;
    } else {
      return rt;
    }
  }

  while (lt < rt) {
    const mid = Math.floor((lt + rt) / 2);
    console.log(lt, mid, rt);
    if (nums[mid] < nums[mid - 1]) {
      rt = mid - 1;
    } else if (nums[mid] < nums[mid + 1]) {
      lt = mid + 1;
    } else {
      return mid;
    }
  }

  return lt;
};

console.log(findPeakElement([1, 2, 3, 1]));
