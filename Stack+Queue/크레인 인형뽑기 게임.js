function solution(board, moves) {
  const basket = [];
  let result = 0;

  moves.forEach((move) => {
    for (const row of board) {
      const target = row[move - 1];

      if (target === 0) continue;
      if (basket[basket.length - 1] === target) {
        result += 2;
        basket.pop();
      } else {
        basket.push(target);
      }
      row[move - 1] = 0;
      break;
    }
  });

  return result;
}

// * 순회 시 어떤 조건을 만족하여 관련 로직을 완료한 뒤, 남은 순회 시 중복 로직 수행이 되지 않도록 break로 빠져 나와야 하는지 확인하기!!
