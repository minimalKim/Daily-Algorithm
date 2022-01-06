function solution(str) {
  const [curriculumRule, curriculum] = str
    .split('\n')
    .map((el) => el.split(''));

  while (curriculum.length) {
    curriculumRule[curriculumRule.length - 1] === curriculum.pop() &&
      curriculumRule.pop();
  }

  return !curriculumRule.length ? 'YES' : 'NO';
}

console.log(
  solution(`CBA
CDAGEB`)
);
// YES
