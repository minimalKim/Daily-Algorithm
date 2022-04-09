// 11. Container With Most Water

// O(N²) Timeout
const maxArea = (height) => {
  const check = Array.from({ length: height.length }, () => false);
  const numIdxs = [];
  let max = 0;

  function DFS(level) {
    if (level === 3) {
      const length = Math.abs(numIdxs[0] - numIdxs[1]);
      const heights = numIdxs.map((idx) => height[idx]);
      const minHeight = Math.min(...heights);
      max = Math.max(max, length * minHeight);
      return;
    }
    for (let i = 0; i < height.length; i++) {
      if (check[i]) continue;
      check[i] = true;
      numIdxs.push(i);
      DFS(level + 1);
      numIdxs.pop();
      check[i] = false;
    }
  }

  DFS(1);

  return max;
};

// refactor
// point : lengthA, lengthB 중 작은 높이가 유지되면, 최대넓이는 최대가로길이 (가장 먼 인덱스) 값으로 고정된다.
// -> two pointer (O(N))

const getArea = (heights, width) => {
  const minHeight = Math.min(...heights);
  return minHeight * width;
};

const maxArea2 = (height) => {
  let [lt, rt] = [0, height.length - 1];
  let max = 0;

  while (lt < rt) {
    const heightA = height[lt];
    const heightB = height[rt];
    max = Math.max(max, getArea([heightA, heightB], rt - lt));

    if (heightA < heightB) {
      lt++;
    } else {
      rt--;
    }
  }
  return max;
};

console.log(maxArea2([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
