function solution(n) {
  let answer = 0;
  answer = Math.floor((n * (n + 1)) / 2);
  return answer;
}

console.log(solution(10));
