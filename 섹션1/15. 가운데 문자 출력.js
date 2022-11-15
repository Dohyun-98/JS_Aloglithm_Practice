function solution(s) {
  let answer = 0;
  // 사용한 문제풀이
  // if (s.length % 2 === 0) {
  //   answer = s[Math.floor(s.length / 2)] + s[Math.floor(s.length / 2) - 1];
  // } else {
  //   answer = s[Math.floor(s.length / 2)];
  // }

  // 강의 문제 풀이
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
  else answer = s.substring(mid - 1, mid + 1);
  return answer;
}
console.log(solution("study"));
console.log(solution("good"));
