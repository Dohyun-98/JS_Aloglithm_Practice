// 투포인터 알고리즘 + 윈도우 슬라이딩
// 1. 연속 부분 수열의 합이 m이 되는 경우의 수를 구하시오.
// 2. 연속 부분 수열의 합이 m이 되는 경우의 수를 구하시오. (연속 부분 수열의 길이가 최소인 경우)
// 3. 연속 부분 수열의 합이 m이 되는 경우의 수를 구하시오. (연속 부분 수열의 길이가 최대인 경우)

function solution(m, arr) {
  let answer = 0;
  let sum = 0;
  let lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) {
      answer++;
    }
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) {
        answer++;
      }
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
