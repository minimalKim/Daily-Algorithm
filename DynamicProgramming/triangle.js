// 120. Triangle
// 83 ms
const minimumTotal = (triangle) => {
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      let [left, right] = [triangle[i - 1][j - 1], triangle[i - 1][j]];
      if (isNaN(left)) {
        left = Number.MAX_SAFE_INTEGER;
      }
      if (isNaN(right)) {
        right = Number.MAX_SAFE_INTEGER;
      }
      triangle[i][j] = triangle[i][j] + Math.min(left, right);
    }
  }
  return Math.min(...triangle[triangle.length - 1]);
};
const triangle = [[1], [-5, -2], [3, 6, 1], [-1, 2, 4, -3]]; // -1
console.log(minimumTotal(triangle));
