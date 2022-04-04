// 74. Search a 2D Matrix

// fail
// const searchMatrix = (matrix, target) => {
//   let [lt, rt] = [0, matrix.length - 1];
//   let result = false;
//   let first = true;

//   if (lt !== rt) {
//     // Find Group
//     while (lt < rt) {
//       const mid = Math.floor((lt + rt) / 2);
//       if (matrix[mid][0] > target) {
//         rt = mid - 1;
//       } else {
//         lt = first ? mid : mid + 1;
//         first = false;
//         if (matrix[mid][matrix[mid].length - 1] >= target) {
//           break;
//         }
//       }
//     }
//   }

//   const group = matrix[lt];
//   [lt, rt] = [0, group.length - 1];

//   // Find Item
//   while (lt <= rt) {
//     const mid = Math.floor((lt + rt) / 2);
//     if (group[mid] > target) {
//       rt = mid - 1;
//     } else if (group[mid] < target) {
//       lt = mid + 1;
//     } else {
//       result = true;
//       rt = mid - 1;
//     }
//   }

//   return result;
// };

// reference
// O(log(mn))
const searchMatrix2 = (matrix, target) => {
  const [rows, cols] = [matrix.length, matrix[0].length];
  let [row, col] = [0, cols - 1];

  while (row < rows && col >= 0) {
    const cur = matrix[row][col];
    if (cur === target) return true;
    else if (cur < target) {
      row++;
    } else {
      col--;
    }
  }
  return false;
};

console.log(searchMatrix([[1], [3]], 3));
