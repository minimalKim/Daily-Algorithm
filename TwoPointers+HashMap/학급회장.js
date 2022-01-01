function solution(s) {
  const map = new Map();

  for (const candidate of s) {
    const voteNum = map.get(candidate) || 0;
    map.set(candidate, voteNum + 1);
  }

  const maxVoteNum = Math.max(...[...map.values()]);

  for (const [key, value] of map) {
    if (value === maxVoteNum) {
      return key;
    }
  }
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
