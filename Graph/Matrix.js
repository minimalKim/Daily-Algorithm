// 542. 01 Matrix

// const updateMatrix = (mat) => {
//   const distanceMat = Array.from({ length: mat.length }, () =>
//     Array.from({ length: mat[0].length }, () => 0)
//   );
//   const queue = [];
//   const dx = [0, -1, 0, 1];
//   const dy = [1, 0, -1, 0];

//   for (let i = 0; i < mat.length; i++) {
//     for (let j = 0; j < mat[0].length; j++) {
//       const num = mat[i][j];
//       if (num === 1) {
//         queue.push([i, j]);
//       }

//       while (queue.length) {
//         const [x, y] = queue.shift();
//         let minLength = Number.MAX_SAFE_INTEGER;

//         for (let z = 0; z < 4; z++) {
//           const nx = x + dx[z];
//           const ny = y + dy[z];
//           if (nx >= 0 && ny >= 0 && nx < mat.length && ny < mat[0].length) {
//             if (mat[nx][ny] === 0) {
//               distanceMat[x][y] = 1;
//               minLength = 1;
//               continue;
//             } else if (distanceMat[nx][ny] > 0) {
//               minLength = Math.min(minLength, distanceMat[nx][ny] + 1);
//             } else {
//               queue.push([nx, ny]);
//               minLength = 0;
//             }
//           }
//         }
//         if (minLength > 0) {
//           distanceMat[x][y] = minLength;
//         }
//       }
//     }
//   }

//   return distanceMat;
// };

// reference
// BFS
// 291 ms
// 0들이 있는 (거리의 최소값 = 0) 좌표 = 0, 그 외 Number.MAX_SAFE_INTEGER(무한대)값으로 설정
// 0좌표 (거리 최소값을 가진 좌표) 주변부터 탐색 -> 거리 변수 설정하여 점점 증가
const updateMatrix = (mat) => {
  const queue = [];
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const distanceMat = Array.from({ length: mat.length }, (_, i) =>
    Array.from({ length: mat[0].length }, (_, j) => {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
        return 0;
      } else {
        return Number.MAX_SAFE_INTEGER;
      }
    })
  );
  let distance = 1;
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (distanceMat[x][y] === distance) {
        distance++;
      }
      if (nx >= 0 && ny >= 0 && nx < mat.length && ny < mat[0].length) {
        if (distanceMat[nx][ny] > distanceMat[x][y]) {
          distanceMat[nx][ny] = distance;
          queue.push([nx, ny]);
        }
      }
    }
  }
  return distanceMat;
};

// const mat = [
//   [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
//   [1, 0, 0, 1, 0, 1, 1, 1, 1, 1],
//   [1, 1, 1, 0, 0, 1, 1, 1, 1, 0],
//   [0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
//   [0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
//   [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
//   [0, 1, 1, 1, 1, 1, 1, 0, 0, 1],
//   [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
//   [0, 1, 0, 1, 1, 0, 1, 1, 1, 1],
//   [1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
// ];

const mat = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];
console.log(updateMatrix(mat));
