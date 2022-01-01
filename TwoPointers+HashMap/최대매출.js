function solution(k, arr) {
  let max = (temp = lt = rt = 0);

  while (rt - lt + 1 <= k) {
    temp += arr[rt++];
  }
  let sum = temp;

  while (rt <= arr.length) {
    if (max < sum) {
      max = sum;
    }
    sum += arr[rt++];
    sum -= arr[lt++];
  }
  return max;
}

// lt = rt - k (변수 줄이기)

function solution2(k, arr) {
  let max = (sum = 0);

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  for (let i = k; i < arr.length; i++) {
    if (max < sum) {
      max = sum;
    }
    sum += arr[i];
    sum -= arr[i - k];
  }
  return max;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution2(3, a));
