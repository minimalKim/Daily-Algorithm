// 산술평균 : N개의 수들의 합을 N으로 나눈 값
function getArithmeticMean(nums) {
  const sum = nums.reduce((a, b) => a + b);
  return Math.round(sum / nums.length);
}

// 중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
function getMedian(sortedNumArr) {
  const midIndex = (sortedNumArr.length - 1) / 2;
  return sortedNumArr[midIndex];
}

// 최빈값 : N개의 수들 중 가장 많이 나타나는 값
function getMode(sortedNumArr) {
  const map = new Map();
  for (let i = 0; i < sortedNumArr.length; i++) {
    if (!map.has(sortedNumArr[i])) {
      map.set(sortedNumArr[i], 1);
    } else {
      map.set(sortedNumArr[i], map.get(sortedNumArr[i]) + 1);
    }
  }

  let maxCount = Number.MIN_SAFE_INTEGER;
  let answer = [];

  map.forEach((count, number) => {
    if (maxCount < count) {
      maxCount = count;
      answer = [];
      answer.push(number);
    } else if (maxCount === map.get(number)) {
      answer.push(number);
    }
  });

  return answer.length === 1 ? answer[0] : answer[1];
}

// 범위 : N개의 수들 중 최댓값과 최솟값의 차이
function getRange(sortedNumArr) {
  const lastIndex = sortedNumArr.length - 1;
  return sortedNumArr[lastIndex] - sortedNumArr[0];
}

function solution(str) {
  const [n, ...nums] = str.split('\n').map((char) => Number(char));
  const sortedNums = nums.sort((a, b) => a - b);
  const fns = [getArithmeticMean, getMedian, getMode, getRange];
  fns.forEach((fn) => console.log(fn(sortedNums)));
}

const input = `5
1
3
8
-2
2`;

solution(input);
