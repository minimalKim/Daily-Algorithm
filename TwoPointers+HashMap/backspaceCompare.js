// 844. Backspace String Compare

// time : O(M + N) | M = s.length, N = t.length
// space : O(M + N)
// BCR : 두개의 string s, t의 각 문자를 조회해야함 O(M + N)
// stack, brute force

const backspaceCompare = (s, t) => {
  const stackS = [];
  const stackT = [];

  for (const char of s) {
    if (char === '#') {
      stackS.pop();
    } else {
      stackS.push(char);
    }
  }

  for (const char of t) {
    if (char === '#') {
      stackT.pop();
    } else {
      stackT.push(char);
    }
  }

  return stackS.join('') === stackT.join('');
};

// --refactoring

const backspaceHelper = (str) => {
  const stack = [];

  for (const char of str) {
    char === '#' ? stackS.pop() : stackS.push(char);
  }

  return stack.join('');
};

const backspaceCompare2 = (s, t) => backspaceHelper(s) === backspaceHelper(t);

// -- reference
// key : #이전의 글자는 제외된다 -> str을 역순으로 조회 시 #이후의 글자는 건너뛴다.
// stack, two-pointer

const backspaceCompare3 = (s, t) => {
  let i = s.length - 1;
  let j = t.length - 1;

  let hashS = 0;
  let hashT = 0;

  while (i >= 0 || j >= 0) {
    if (s[i] == '#') {
      hashS++;
      i--;
      continue;
    }

    if (t[j] == '#') {
      hashT++;
      j--;
      continue;
    }

    if (hashS) {
      hashS--;
      i--;
      continue;
    }

    if (hashT) {
      hashT--;
      j--;
      continue;
    }

    if (s[i] != t[j]) {
      return false;
    }

    i--;
    j--;
  }

  return true;
};

console.log(backspaceCompare3('ab#c', 'ad#c'));
console.log(backspaceCompare3('ab##', 'c#d#'));
console.log(backspaceCompare3('a#c', 'b'));
