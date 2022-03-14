// 454. 4Sum II
const fourSumCount = (nums1, nums2, nums3, nums4) => {
  const numsArr = [nums1, nums2, nums3, nums4];
  let result = 0;

  function DFS(level, sum) {
    if (level === numsArr.length) {
      if (sum === 0) result++;
      return;
    }
    for (const num of numsArr[level]) {
      DFS(level + 1, sum + num);
    }
  }

  DFS(0, 0);

  return result;
};

// refactor

const fourSumCount2 = (nums1, nums2, nums3, nums4) => {
  const memoization = new Map();
  let result = 0;

  for (const numA of nums1) {
    for (const numB of nums2) {
      const sum = numA + numB;
      memoization.set(sum, memoization.get(sum) + 1 || 1);
    }
  }

  for (const numC of nums3) {
    for (const numD of nums4) {
      const sum = numC + numD;
      if (memoization.has(-sum)) {
        result += memoization.get(-sum);
      }
    }
  }

  return result;
};

const nums1 = [-1, -1];
const nums2 = [-1, 1];
const nums3 = [-1, 1];
const nums4 = [1, -1];

console.log(fourSumCount2(nums1, nums2, nums3, nums4)); // 6
