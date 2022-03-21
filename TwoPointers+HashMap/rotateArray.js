// 189. Rotate Array
// -> tow pointers
// reference
// The basic idea is that, for example, nums = [1,2,3,4,5,6,7] and k = 3, first we reverse [1,2,3,4], it becomes[4,3,2,1]; then we reverse[5,6,7], it becomes[7,6,5], finally we reverse the array as a whole, it becomes[4,3,2,1,7,6,5] ---> [5,6,7,1,2,3,4].

const reverse = (arr, i, j) => {
  let temp = null;
  while (i < j) {
    temp = arr[i];
    arr[i++] = arr[j];
    arr[j--] = temp;
  }
};

const rotate = (nums, k) => {
  k %= nums.length;

  reverse(nums, 0, nums.length - k - 1);
  reverse(nums, nums.length - k, nums.length - 1);
  reverse(nums, 0, nums.length - 1);
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
