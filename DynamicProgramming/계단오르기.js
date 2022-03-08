function solution(number) {
  let dy = Array.from({ length: number + 1 }, () => 0);

  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i < number + 1; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }

  return dy.pop();
}

const input = 7;

console.log(solution(input)); // 21
