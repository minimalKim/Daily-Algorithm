function solution(num) {
  const dy = Array.from({ length: num + 2 });

  dy[0] = 1;
  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i < dy.length; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }

  return dy.pop();
}

const input = 7;

console.log(solution(input)); // 34
