const solution = (s) => {
  const stack = [];
  // reference -- 같은 알파벳이 2개 붙어 있는 짝만을 제거하기 때문에, length가 홀수이면 하나가 무조건 남음
  if (s.length % 2) return 0;
  // --
  for (const char of s) {
    const top = stack[stack.length - 1];
    if (top === char) stack.pop();
    else stack.push(char);
  }

  return stack.length === 0 ? 1 : 0;
};

console.log(solution('baabaab'));
