// reference
// 이분탐색
// O(logn)
// 특정값을 찾는것이 아님
// 최소 몇분에 모든 심사가 끝나는가?
// = 결정 문제 = 이진탐색 = 파라메트릭 서치(Parametric Search)

// -> 최소 : 1분 * 1명  ~ 최대 1,000,000,000분 * 1,000,000,000명
// 처리가능한 사람 = (총 최소) 걸린 시간 / 한명 걸린 시간

const solution = (n, times) => {
  const sortedTimes = times.sort((a, b) => a - b);
  let [lt, rt] = [1, sortedTimes[sortedTimes.length - 1] * n];

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    // sum([(총 최소) 걸린 시간 / 한명 걸린 시간])
    const peopleSum = times.reduce(
      (acc, time) => acc + Math.floor(mid / time),
      0
    );

    if (peopleSum < n) {
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return lt;
};

console.log(solution(6, [7, 10]));
