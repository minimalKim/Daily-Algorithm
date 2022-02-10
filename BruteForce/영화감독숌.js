function check666Number(number) {
  let is666Number = false;
  let quotient = number;
  let counter = 0;

  while (quotient > 0) {
    const remainder = quotient % 10;
    quotient = parseInt(quotient / 10);

    if (remainder === 6) {
      counter++;
    } else {
      counter = 0;
    }
    if (counter === 3) {
      is666Number = true;
      break;
    }
  }
  return is666Number;
}

function solution(char) {
  const number = Number(char);
  const arr = [];
  let counter = 0;

  while (true) {
    const movieNumber = 666 + counter++;

    if (check666Number(movieNumber)) {
      arr.push(movieNumber);
    }
    if (arr.length === number) {
      break;
    }
  }

  return arr[number - 1];
}

console.log(solution(187));
