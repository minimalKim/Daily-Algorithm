function solution(id_list, report, k) {
  let reports = [...new Set(report)].map((str) => str.split(' '));
  let check = new Map();
  for (const [_, bad] of reports) {
    check.set(bad, check.get(bad) + 1 || 1);
  }

  let mails = new Map();
  for (const [good, bad] of reports) {
    if (check.get(bad) >= k) {
      mails.set(good, mails.get(good) + 1 || 1);
    }
  }

  let answer = id_list.map((id) => mails.get(id) || 0);
  return answer;
}

const id_list = ['muzi', 'frodo', 'apeach', 'neo'];

const report = [
  'muzi frodo',
  'apeach frodo',
  'frodo neo',
  'muzi neo',
  'apeach muzi',
];

const k = 2;

console.log(solution(id_list, report, k)); // [2,1,1,0]
