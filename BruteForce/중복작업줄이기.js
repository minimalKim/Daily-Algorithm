// brute force O(N4)
function solution(maxN) {
  let counter = 0;
  for (let a = 1; a <= maxN; a++) {
    for (let b = 1; b <= maxN; b++) {
      for (let c = 1; c <= maxN; c++) {
        for (let d = 1; d <= maxN; d++) {
          const result = Math.pow(a, 3) + Math.pow(b, 3);
          if (
            Math.pow(a, 3) + Math.pow(b, 3) ===
            Math.pow(c, 3) + Math.pow(d, 3)
          ) {
            counter++;
            console.log(a, b, c, d);
            break; // 정해진 d값은 하나
          }
        }
      }
    }
  }

  return counter;
}

// 불필요한 작업 줄이기 (O(N3))
function solution2(maxN) {
  let counter = 0;
  for (let a = 1; a <= maxN; a++) {
    for (let b = 1; b <= maxN; b++) {
      for (let c = 1; c <= maxN; c++) {
        const d = Math.cbrt(Math.pow(a, 3) + Math.pow(b, 3) - Math.pow(c, 3));
        if (d > 0 && Number.isInteger(d)) {
          counter++;
          console.log(a, b, c, d);
        }
      }
    }
  }

  return counter;
}

// 중복되는 작업 줄이기 (O(N2))
function solution3(maxN) {
  const map = new Map();
  let counter = 0;

  for (let c = 1; c <= maxN; c++) {
    for (let d = 1; d <= maxN; d++) {
      const result = Math.pow(c, 3) + Math.pow(d, 3);
      map.set(result, [c, d]);
    }
  }

  map.forEach(([a, b], resultA) => {
    map.forEach((_, resultB) => {
      if (resultA === resultB) {
        a !== b ? (counter += 4) : (counter += 1);
      }
    });
  });

  return counter;
}

console.log(solution3(5));
