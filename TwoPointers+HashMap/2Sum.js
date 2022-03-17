// const twoSum = (nums, target) => {
//   let [lt, rt] = [0, 1];
//   const sortedNums = [...nums].sort((a, b) => a - b);

//   for (let i = 1; i < nums.length; i++) {
//     rt = i;
//     lt = i - 1;
//     const sum = sortedNums[lt] + sortedNums[rt];
//     while (sortedNums[lt] + sortedNums[rt] > target) lt--;
//     if (sum < target) continue;
//     else if (sum === target) break;
//   }
//   lt = nums.findIndex((num) => num === sortedNums[lt]);
//   rt = nums.lastIndexOf(sortedNums[rt]);

//   if (lt === rt) rt++;
//   return [lt, rt];
// };
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6)); // [1,2]
// console.log(twoSum([3, 2, 3], 6)); // [0,2]
// console.log(twoSum([2, 5, 5, 11], 10)); //[1, 2];
// console.log(twoSum([-1, -2, -3, -4, -5], -8)); //[2, 4];

// refactor
// -> hashMap
// xa = target - xb
const twoSum2 = (nums, target) => {
  const dictionary = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (dictionary.has(num)) {
      return [dictionary.get(num), i];
    } else {
      dictionary.set(target - num, i);
    }
  }
};

console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([3, 2, 4], 6)); // [1,2]
console.log(twoSum2([3, 2, 3], 6)); // [0,2]
console.log(twoSum2([2, 5, 5, 11], 10)); //[1, 2];
console.log(twoSum2([-1, -2, -3, -4, -5], -8)); //[2, 4];
