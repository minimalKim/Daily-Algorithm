// two Pointers
function solution(str) {
  const [[length], nums] = str
    .split('\n')
    .map((el) => el.split(' ').map((char) => +char));
  const dy = Array.from({ length: length }, () => 0);

  dy[0] = 1;
  let lastNumIdx = 0;
  let beforeLastNumIdx = 0;

  for (let i = 1; i < length; i++) {
    const lastNum = nums[lastNumIdx];
    const beforeLastNum = nums[beforeLastNumIdx];

    if (lastNum < nums[i]) {
      dy[i] = dy[lastNumIdx] + 1;
      beforeLastNumIdx = lastNumIdx;
      lastNumIdx = i;
    } else if (lastNum > nums[i] && beforeLastNum < nums[i]) {
      dy[i] = dy[lastNumIdx];
      dy[lastNumIdx] = 0;
      lastNumIdx = i;
    }
  }
  return Math.max(...dy);
}

// dynamic
function solution2(str) {
  const [[length], nums] = str
    .split('\n')
    .map((el) => el.split(' ').map((char) => +char));
  const dy = Array.from({ length: length }, () => 0);

  dy[0] = 1;

  for (let i = 1; i < length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i] && dy[j] > max) {
        max = dy[j];
      }
    }
    dy[i] = max + 1;
  }

  return Math.max(...dy);
}

const input = `8
5 3 7 8 6 2 9 4`;

console.log(solution2(input)); // 4
