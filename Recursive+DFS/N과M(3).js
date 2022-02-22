function solution(str) {
  const [maxNumber, capacity] = str.split(' ').map((char) => Number(char));
  const sequence = [];
  const answer = [];

  function DFS(level) {
    if (level === capacity + 1) {
      answer.push(sequence.join(' '));
      return;
    }
    for (let i = 0; i < maxNumber; i++) {
      sequence.push(i + 1);
      DFS(level + 1);
      sequence.pop();
    }
  }

  DFS(1);
  return answer.join('\n');
}

const input = `3 3`;

console.log(solution(input));
