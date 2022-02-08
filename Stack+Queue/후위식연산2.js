function solution(str) {
  const [n, postfix, ...nums] = str.split(/\n/).map((str) => str.trim());
  const stack = [];
  const engToNum = {};
  const engRegex = /^[A-Z]*$/;
  let count = 0;

  for (let i = 0; i < postfix.length; i++) {
    const char = postfix[i];

    if (engRegex.test(char)) {
      if (!engToNum.hasOwnProperty(char)) {
        engToNum[char] = nums[count++];
      }

      stack.push(+engToNum[char]);
      continue;
    }

    const [rt, lt] = [stack.pop(), stack.pop()];
    switch (char) {
      case '+':
        stack.push(lt + rt);
        break;
      case '-':
        stack.push(lt - rt);
        break;
      case '*':
        stack.push(lt * rt);
        break;
      case '/':
        stack.push(lt / rt);
        break;
      case '%':
        stack.push(lt % rt);
        break;
    }
  }
  return stack[0].toFixed(2);
}

console.log(
  solution(`1
  AA+A+
  1`)
);
