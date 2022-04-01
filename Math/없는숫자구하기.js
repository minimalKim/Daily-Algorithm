// 없는 숫자 더하기
const makeNumsCheckObj = () => {
  const obj = {};
  for (let i = 0; i <= 9; i++) {
    obj[i] = false;
  }

  return obj;
};

const solution = (numbers) => {
  let result = 0;
  const numsCheck = makeNumsCheckObj();
  numbers.forEach((num) => {
    numsCheck[num] = true;
  });
  Object.values(numsCheck).forEach((isIncluded, idx) => {
    if (!isIncluded) {
      result += +Object.keys(numsCheck)[idx];
    }
  });

  return result;
};

// reference
// 전체합 - 사용된 숫자 (숫자 array의 합)
const solution2 = (numbers) => {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
};

console.log(solution([5, 8, 4, 0, 6, 7, 9]));
