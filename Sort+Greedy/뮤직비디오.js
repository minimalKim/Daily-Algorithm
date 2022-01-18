function searchMinDvdSize(songs, capacity) {
  let [lt, rt] = [Math.max(...songs), songs.reduce((a, b) => a + b)];
  let mid;

  while (lt <= rt) {
    mid = Math.floor((lt + rt) / 2);
    let count = 1;
    let sum = 0;
    for (const song of songs) {
      if (sum + song <= mid) {
        sum += song;
      } else {
        count++;
        sum = song;
      }

      if (count > capacity) break;
    }
    if (count > capacity) {
      lt = mid + 1;
    } else if (count < capacity) {
      rt = mid - 1;
    } else break;
  }
  return mid;
}

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

  const [n, capacity] = nums.splice(0, 2);

  return searchMinDvdSize(nums, capacity);
}

console.log(
  solution(`9 3
  1 2 3 4 5 6 7 8 9`)
);
// 17
