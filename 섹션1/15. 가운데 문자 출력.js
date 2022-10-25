function solution(s) {
  let answer = 0;
  if (s.length % 2 === 0) {
    answer = s[Math.floor(s.length / 2)] + s[Math.floor(s.length / 2) - 1];
  } else {
    answer = s[Math.floor(s.length / 2)];
  }
  return answer;
}
console.log(solution("study"));
console.log(solution("good"));
