// 283. Move Zeroes
// -> tow pointers
// 163 ms

const moveZeroes = (nums) => {
  let [lt, rt] = [0, 0];
  while (lt <= nums.length - 1 && rt <= nums.length - 1) {
    let temp = 0;
    if (nums[lt] === 0 && nums[rt] !== 0) {
      temp = nums[lt];
      nums[lt] = nums[rt];
      nums[rt] = temp;
    } else if (nums[lt] !== 0 && nums[rt] === 0) {
      lt++;
    } else {
      rt++;
    }
  }

  return nums;
};

// refactor
// 103 ms

const moveZeroes2 = (nums) => {
  let lastNonZeroFoundAt = 0;
  for (let i = 0; i < nums.length; i++) {
    let temp = 0;
    if (nums[i] != 0) {
      // swap
      temp = nums[i];
      nums[i] = nums[lastNonZeroFoundAt];
      nums[lastNonZeroFoundAt++] = temp;
    }
  }

  return nums;
};

console.log(moveZeroes2([0, 1, 0, 3, 12]));
console.log(moveZeroes2([0]));
console.log(moveZeroes2([1]));
console.log(moveZeroes2([1, 0]));
console.log(moveZeroes2([2, 1]));
console.log(moveZeroes2([4, 2, 4, 0, 0, 3, 0, 5, 1, 0]));
