function solution(str) {
  const [maxNumber, capacity] = str.split(' ').map((char) => Number(char));
  const sequence = [];

  function DFS(level) {
    if (level === capacity + 1) {
      console.log(sequence.join(' '));
      return;
    }

    for (let i = 0; i < maxNumber; i++) {
      const lastIdx = sequence.length - 1;
      if (i < sequence[lastIdx]) continue;
      sequence.push(i + 1);
      DFS(level + 1);
      sequence.pop();
    }
  }

  DFS(1);
}

const input = `4 4`;

solution(input);
