function solution(s) {
  let result = '';
  let counter = 0;

  s.split('').forEach((char) => {
    switch (char) {
      case '(':
        counter++;
        break;
      case ')':
        counter--;
        break;
      default:
        if (counter === 0) result += char;
    }
  });

  return result;
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'));
// EFLM
// s 순회 -> '('일 시 -> result 넣지 않음 & counter++
//        -> ')'일 시 -> result 넣지 않음 & counter--
//        -> 알파벳일 시 counter이 0인가? -> result 넣음
