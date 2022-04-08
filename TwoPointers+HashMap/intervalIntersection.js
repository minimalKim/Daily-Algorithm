// 986. Interval List Intersections

// --reference
// T.C : O(M+N)
// S.C : O(M+N)

const intervalIntersection = (firstList, secondList) => {
  let [i, j] = [0, 0];
  const result = [];

  while (i < firstList.length && j < secondList.length) {
    let [first_start, first_end] = firstList[i];
    let [second_start, second_end] = secondList[j];
    // 겹치는 구간
    if (first_start <= second_end && first_end >= second_start) {
      result.push([
        Math.max(first_start, second_start),
        Math.min(first_end, second_end),
      ]);
    }

    if (first_end <= second_end) {
      i++;
    } else {
      j++;
    }
  }

  return result;
};

console.log(
  intervalIntersection(
    [[14, 16]],
    [
      [7, 13],
      [16, 20],
    ]
  )
);
console.log(
  intervalIntersection(
    [
      [0, 2],
      [5, 10],
      [13, 23],
      [24, 25],
    ],
    [
      [1, 5],
      [8, 12],
      [15, 24],
      [25, 26],
    ]
  )
);

console.log(
  intervalIntersection(
    [
      [1, 3],
      [5, 9],
    ],
    []
  )
);
