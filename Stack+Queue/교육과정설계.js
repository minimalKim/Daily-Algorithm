function solution(str) {
  const [curriculumRule, curriculum] = str
    .split('\n')
    .map((el) => el.split(''));

  for (let i = curriculum.length - 1; i >= 0; i--) {
    if (curriculumRule.includes(curriculum[i])) {
      if (curriculumRule.pop() !== curriculum[i]) {
        return 'NO';
      }
    }
  }
  return !curriculumRule.length ? 'YES' : 'NO';
}

console.log(
  solution(`CBA
  FCDGEBA`)
);
// YES
// 순회 문제일 시 초반에 early return 할 수 있는 조건이 있는지 확인하기
