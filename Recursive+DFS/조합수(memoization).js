// 메모이제이션(memoization)은 컴퓨터 프로그램이 동일한 계산을 반복해야 할 때,
// 이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술

function solution(str) {
  const [totalCount, pickedCount] = str.split(' ').map((char) => Number(char));
  let answer = 0;

  function DFS(n, r) {
    if (r === n) {
      answer += 1;
      return;
    }
    if (r === 1) {
      answer += n;
      return;
    }
    DFS(n - 1, r - 1);
    DFS(n - 1, r);
  }

  DFS(totalCount, pickedCount);

  return answer;
}

// refactor

function DFS(n, r) {
  if (r === n || r === 0) {
    return 1;
  }
  return DFS(n - 1, r - 1) + DFS(n - 1, r);
}

function solution2(str) {
  const [totalCount, pickedCount] = str.split(' ').map((char) => Number(char));
  return DFS(totalCount, pickedCount);
}

// memoization

function solution3(str) {
  const [totalCount, pickedCount] = str.split(' ').map((char) => Number(char));
  const memoization = Array.from(Array(totalCount + 1), () =>
    new Array(pickedCount + 1).fill(null)
  );

  function DFS(n, r) {
    if (memoization[n][r]) {
      return memoization[n][r];
    }
    if (r === n || r === 0) {
      return 1;
    }
    const numOfCombination = DFS(n - 1, r - 1) + DFS(n - 1, r);
    memoization[n][r] = numOfCombination;
    return numOfCombination;
  }
  return DFS(totalCount, pickedCount);
}

const input = `33 19`; // 818809200
console.log(solution3(input));
