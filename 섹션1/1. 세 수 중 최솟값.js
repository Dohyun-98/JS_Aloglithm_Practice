function solution(a, b, c) {
  // const answer = Math.min(a, b, c);
  // answer = a < b ? (a < c ? a : b < c ? b : c) : b < c ? b : c;
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
}

console.log(solution(2, 5, 1));
