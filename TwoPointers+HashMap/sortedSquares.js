// 977. Squares of a Sorted Array
// -> tow pointers
// 123 ms

const sortedSquares = (nums) => {
  const sortedArr = Array.from({ length: nums.length }, () => null);
  let [lt, rt] = [0, nums.length - 1];
  let index = nums.length - 1;

  while (lt <= rt && index >= 0) {
    if (Math.abs(nums[lt]) > Math.abs(nums[rt])) {
      sortedArr[index--] = Math.pow(nums[lt++], 2);
    } else {
      sortedArr[index--] = Math.pow(nums[rt--], 2);
    }
  }

  return sortedArr;
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); //[0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); //[4,9,9,49,121]
