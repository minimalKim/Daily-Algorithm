function solution(string) {
  const nums = string
    .split('\n')
    .map((str) =>
      str
        .trim()
        .split(' ')
        .map((char) => Number(char))
    )
    .flat();

  const [n, m] = nums.splice(0, 2);
  const sortedNums = nums.sort((a, b) => a - b);
  let [lt, rt] = [0, sortedNums.length - 1];
  let mid;

  // 시간복잡도 O(logN)
  while (lt <= rt) {
    // while(true)도 동작
    mid = Math.floor((lt + rt) / 2);

    if (sortedNums[mid] < m) {
      lt = mid + 1;
    } else if (sortedNums[mid] > m) {
      rt = mid - 1;
    } else break;
  }
  return mid + 1;
}

console.log(
  solution(`8 32
  23 87 65 12 57 32 99 81`)
);
// 3
