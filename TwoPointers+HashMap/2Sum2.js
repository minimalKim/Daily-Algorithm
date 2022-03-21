// 167. Two Sum II - Input Array Is Sorted
// -> tow pointers
// 81 ms

const twoSum = (numbers, target) => {
  let lt = 0;

  for (let rt = 1; rt < numbers.length; rt++) {
    let sum = numbers[lt] + numbers[rt];
    while (numbers[lt] + numbers[rt] > target) {
      sum = numbers[--lt] + numbers[rt];
    }

    if (sum < target) {
      lt++;
      continue;
    } else if (sum === target) {
      return [lt + 1, rt + 1];
    }
  }
};

// refactor
// 1. two pointer
// 83 ms
const twoSum1 = (numbers, target) => {
  let [lt, rt] = [0, numbers.length - 1];

  while (lt < rt) {
    const sum = numbers[lt] + numbers[rt];
    if (sum < target) {
      lt++;
    } else if (sum > target) {
      rt--;
    } else {
      return [lt + 1, rt + 1];
    }
  }
};

// 2. dictionary (hash-map)
// 73 ms
const twoSum2 = (numbers, target) => {
  const dictionary = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (dictionary.has(target - number)) {
      return [dictionary.get(target - number) + 1, i + 1];
    }
    dictionary.set(number, i);
  }
};

console.log(twoSum2([2, 3, 4], 6));
console.log(twoSum2([2, 7, 11, 15], 22));
