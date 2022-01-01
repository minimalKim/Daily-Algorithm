// 알파벳 순서는 상관없음 (결과만 비교)
function solution(str1, str2) {
  let answer = 'YES';
  const map1 = new Map();

  for (const alphabet of str1) {
    const alphabetCounter = map1.get(alphabet) || 0;
    map1.set(alphabet, alphabetCounter + 1);
  }

  for (const alphabet of str2) {
    if (!map1.has(alphabet) || !map1.get(alphabet)) {
      return (answer = 'No');
    }
    const alphabetCounter = map1.get(alphabet);
    map1.set(alphabet, alphabetCounter - 1);
  }

  return answer;
}

let a = 'AbaAeCe';
let b = 'baeeACA';
console.log(solution(a, b));
