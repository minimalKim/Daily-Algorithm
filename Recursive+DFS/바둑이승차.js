function makeSumsOfSubset(nums) {
  const subset = Array.from({ length: nums.length });
  const sumsOfSubset = [];
  function DFS(idx) {
    if (idx >= nums.length) {
      sumsOfSubset.push(subset.reduce((a, b) => a + b));
      return;
    } else {
      subset[idx] = 0;
      DFS(idx + 1);
      subset[idx] = nums[idx];
      DFS(idx + 1);
    }
  }
  DFS(0);

  return sumsOfSubset;
}

function searchMaxInLimit(sortedNums, limitNum) {
  let [lt, rt] = [0, sortedNums.length - 1];
  let mid;
  while (lt < rt) {
    mid = Math.floor((lt + rt) / 2);
    if (sortedNums[mid] > limitNum) {
      rt = mid - 1;
    } else if (sortedNums[mid] < limitNum) {
      lt = mid + 1;
    } else break;
  }
  return sortedNums[mid];
}

function solution(str) {
  const nums = str
    .split(/ |\n/)
    .filter((char) => !!char)
    .map((char) => Number(char));

  const [limit] = nums.splice(0, 2);
  const sumsOfSubset = makeSumsOfSubset(nums);
  sortedSums = sumsOfSubset.sort((a, b) => a - b);

  return searchMaxInLimit(sortedSums, limit);
}

// ---풀이참고--- //

function solution2(str) {
  const nums = str
    .split(/ |\n/)
    .filter((char) => !!char)
    .map((char) => Number(char));

  const [limit] = nums.splice(0, 2);
  let answer = Number.MIN_SAFE_INTEGER;

  function DFS(idx, sum) {
    if (sum > limit) return;
    if (idx >= nums.length) {
      answer = Math.max(answer, sum);
    } else {
      DFS(idx + 1, sum);
      DFS(idx + 1, sum + nums[idx]);
    }
  }
  DFS(0, 0);

  return answer;
}

console.log(
  solution2(`259 5
  81
  58
  42
  33
  61`) // 242
);
