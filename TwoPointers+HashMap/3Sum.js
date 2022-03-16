// 15. 3Sum
// fail

const threeSum = (nums) => {
  const numsCheck = new Map();
  const memoization = new Map();
  const result = [];

  for (const num of nums) {
    numsCheck.set(num, numsCheck.get(num) + 1 || 1);
  }

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const numA = nums[i];
      const numB = nums[j];
      const sum = numA + numB;
      if (memoization.get(sum)) {
        memoization.set(sum, [...memoization.get(sum), [numA, numB]]);
      } else {
        memoization.set(sum, [[numA, numB]]);
      }
    }
  }

  for (const num of nums) {
    if (!numsCheck.get(num)) continue;
    if (memoization.has(-num)) {
      const value = memoization.get(-num);
      console.log(num);
      numsCheck.set(num, numsCheck.get(num) - 1);
      console.log(numsCheck);
      result.push(
        value.map((arr) => {
          arr.forEach((num) => {
            console.log(num);
            numsCheck.set(num, numsCheck.get(num) - 1);
          });
          return [...arr, num];
        })
      );
    }
  }

  return result;
};

// refactor
//  -> pointer
// O(N²)
// 319 ms

const threeSum2 = (nums) => {
  const sortedNums = nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sortedNums.length; i++) {
    let lt = i;
    let mt = i + 1;
    let rt = sortedNums.length - 1;
    if (sortedNums[i] === sortedNums[i - 1]) continue;

    while (mt < rt) {
      if (sortedNums[rt] === sortedNums[rt + 1]) {
        rt--;
        continue;
      }
      const sum = sortedNums[lt] + sortedNums[mt] + sortedNums[rt];
      if (sum < 0) mt++;
      else if (sum > 0) rt--;
      else {
        result.push([sortedNums[lt], sortedNums[mt], sortedNums[rt]]);
        rt--;
      }
    }
  }

  return result;
};

// refactor
// 197 ms
const threeSum3 = (nums) => {
  const sortedNums = nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sortedNums.length; i++) {
    let lt = i;
    let mt = i + 1;
    let rt = sortedNums.length - 1;
    if (sortedNums[i] === sortedNums[i - 1]) continue;

    while (mt < rt) {
      const sum = sortedNums[lt] + sortedNums[mt] + sortedNums[rt];

      if (sum < 0) mt++;
      else if (sum > 0) rt--;
      else {
        result.push([sortedNums[lt], sortedNums[mt], sortedNums[rt]]);
        rt--;
        while (mt < rt && sortedNums[rt] === sortedNums[rt + 1]) rt--;
      }
    }
  }

  return result;
};

console.log(threeSum2([-1, 0, 1, 2, -1, -4])); // [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
console.log(threeSum2([])); // [ ]
console.log(threeSum2([0])); // [ ]
console.log(threeSum2([0, 0, 0, 0, 0, 0, 0])); // [[0,0,0]]
