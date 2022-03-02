function getCombination(capacity, pickedNum) {
  const memoization = Array.from({ length: capacity + 1 }, () =>
    Array(capacity).fill(null)
  );

  function recursive(c, r) {
    if (memoization[c][r]) {
      return memoization[c][r];
    }
    if (r === 0 || r === c) {
      return 1;
    }
    const numOfCombination = recursive(c - 1, r - 1) + recursive(c - 1, r);
    memoization[c][r] = numOfCombination;
    return numOfCombination;
  }

  return recursive(capacity, pickedNum);
}

function getPermutationWitNumsOfCombination(
  capacity,
  finalSum,
  numsOfCombination
) {
  const check = Array.from({ length: capacity }, () => false);
  const temp = Array.from({ length: capacity });
  let result = null;

  function recursive(level, sum) {
    if (result) return;
    if (level === capacity && sum === finalSum) {
      result = [...temp].join(' ');
      return;
    }
    for (let i = 0; i < capacity; i++) {
      if (check[i]) continue;
      else {
        check[i] = true;
        temp[level] = i + 1;
        recursive(level + 1, sum + temp[level] * numsOfCombination[level]);
        check[i] = false;
      }
    }
  }

  recursive(0, 0);
  return result;
}

function solution(str) {
  const [capacity, finalSum] = str.split(' ').map((char) => +char);

  const numsOfCombination = Array.from({ length: capacity }, (_, index) =>
    getCombination(capacity - 1, index)
  );

  return getPermutationWitNumsOfCombination(
    capacity,
    finalSum,
    numsOfCombination
  );
}

const input = '4 16';
console.log(solution(input));
