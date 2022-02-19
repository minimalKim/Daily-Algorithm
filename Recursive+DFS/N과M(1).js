function solution(str) {
  const [maxNumber, capacity] = str.split(' ').map((char) => Number(char));
  const check = Array.from({ length: capacity }, () => false);
  const sequence = [];

  function DFS(level) {
    if (sequence.length === capacity) {
      console.log(sequence.join(' '));
      return;
    }

    for (let i = 0; i < maxNumber; i++) {
      if (check[i]) continue;
      check[i] = true;
      sequence.push(i + 1);
      DFS(level + 1);
      check[i] = false;
      sequence.pop();
    }
  }

  DFS(1);
}

const input = `4 2`;

solution(input);
