function solution(m, arr) {
  let answer = 0;
  let sum = 0;
  let lt = 0;
  let rt = 0;

  while (rt < arr.length) {
    if (sum < m) {
      rt++;
      sum += arr[rt];
    } else if (sum >= m) {
      if (sum === m) {
        answer++;
      }
      sum -= arr[lt];
      lt++;
      if (sum === m) {
        answer++;
      }
    }
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
