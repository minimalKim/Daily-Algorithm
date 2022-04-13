const solution = (matrix, k) => {
  if (matrix.length === 0) return [];

  let result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    result.push([]);
  }
  for (let j = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length; i++) {
      result[j].push(matrix[i][j]);
    }
    result[j].reverse();
  }

  if (k % 4 === 0) {
    return matrix;
  } else if (k === undefined || k % 4 === 1) {
    return result;
  } else if (k % 4 === 2) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[j].reverse();
    }
    matrix.reverse();
    return matrix;
  } else {
    for (let j = 0; j < result.length; j++) {
      result[j].reverse();
    }
    result.reverse();
    return result;
  }
};

// reference
const solution2 = (matrix, k = 0) => {
  const N = matrix.length;
  const M = matrix[0] && matrix[0].length;

  return rotateMatrix(matrix, k % 4, N, M);
};

const rotateMatrix = (matrix, rotateNum, n, m) => {
  if (rotateNum === 0) return matrix;
  const rotated = [];
  // 홀수번 회전 시 M X N, 짝수번 회전 시 N X M
  const RC = rotateNum % 2 === 1 ? [m, n] : [n, m];

  for (let row = 0; row < RC[0]; row++) {
    rotated[row] = [];
    for (let col = 0; col < RC[1]; col++) {
      if (rotateNum === 1) {
        rotated[row][col] = matrix[n - col - 1][row];
      } else if (rotateNum === 2) {
        rotated[row][col] = matrix[n - row - 1][m - col - 1];
      } else {
        rotated[row][col] = matrix[row][m - row - 1];
      }
    }
  }

  return rotated;
};

console.log(
  solution2(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    1
  )
);

console.log(
  solution2(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    2
  )
);
