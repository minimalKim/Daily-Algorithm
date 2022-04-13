// 438. Find All Anagrams in a String
// T.C : O(M + N) M = s.length, N = p.length
// sliding window

const makeAnagramMap = (str) => {
  const map = new Map();
  for (const char of str) {
    map.set(char, map.get(char) + 1 || 1);
  }

  return map;
};

const findAnagrams = (s, p) => {
  const anagramMap = makeAnagramMap(p);
  const result = [];
  let [l, r] = [0, 0];
  let counter = p.length;

  while (r < s.length) {
    const char_left = s[l];
    const char_right = s[r];

    if (anagramMap.get(char_right) > 0) {
      counter--;
    }

    anagramMap.has(char_right)
      ? anagramMap.set(char_right, anagramMap.get(char_right) - 1)
      : anagramMap.set(char_right, -1);
    r++;

    if (counter === 0) {
      result.push(l);
    }

    if (r - l === p.length) {
      if (anagramMap.get(char_left) >= 0) {
        counter++;
      }
      anagramMap.set(char_left, anagramMap.get(char_left) + 1);
      l++;
    }
  }

  return result;
};

console.log(findAnagrams('cbaebabacd', 'abc'));

const findAnagrams2 = (s, p) => {
  // 마지막에 반환될 출력 배열을 초기화하고 p에 문자를 저장하기 위해 requiredChars 객체를 초기화합니다
  const output = [];
  const neededChars = {};

  // p의 모든 char를 키로 포함하고 해당 char가 p에 값으로 나타나는 횟수를 포함하도록 requiredChars를 채웁니다.
  for (let char of p) {
    if (char in neededChars) {
      neededChars[char]++;
    } else neededChars[char] = 1;
  }

  // 창 포인터와 아나그램을 형성하는 데 필요한 총 문자 수를 초기화합니다.
  let left = 0;
  let right = 0;
  let count = p.length;

  // start sliding the window
  while (right < s.length) {
    console.log(left, right, count, neededChars);

    // 현재 char가 p에서 발견되고 현재 필요한 경우(neededChars의 값이 0보다 큼)
    // 그런 다음 필요하지만 아직 찾지 못한 총 문자 수를 줄입니다.
    if (neededChars[s[right]] > 0) count--;

    // 현재 문자에 ​​필요한 양을 줄이고 창의 오른쪽 끝을 한 단계 앞으로 이동합니다.
    neededChars[s[right]]--;
    right++;

    // 카운트가 0이면 왼쪽 인덱스에서 시작하는 아나그램이 있다는 것을 의미하므로 왼쪽을 출력 배열로 밀어넣습니다.
    if (count === 0) output.push(left);

    // 처음에 창은 오른쪽 끝으로 앞으로 나아가면서 길이를 늘립니다.
    // 창 길이가 처음으로 p의 길이에 도달한 후,
    // 창은 왼쪽 끝이 먼저 움직이는 애벌레처럼 앞으로 움직이기 시작할 것입니다.
    if (right - left == p.length) {
      // 남겨진 문자가 필요한 문자인 경우 현재 아나그램을 형성하는 데 필요한 총 문자 수를 늘립니다.
      if (neededChars[s[left]] >= 0) count++;

      // 아래 줄은 이해하는 데 가장 중요합니다.
      // 창이 나머지 문자열을 검색하기 위해 앞으로 이동할 때 필요한 문자가 뒤에 남을 때마다(창 외부),
      // requiredChars 객체에서 해당 char 값을 증가시킵니다(창의 향후 참조를 위해 해당 char의 필요성을 복원합니다).
      neededChars[s[left]]++;
      left++;
    }
  }
  return output;
};
