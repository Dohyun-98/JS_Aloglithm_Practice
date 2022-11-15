function solution(s, t) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      answer++;
    }
  }
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));

function solution2(s, t) {
  // 구분자가 개수가 n이면 문자열은 n+1개
  let answer = s.split(t).length - 1;
  return answer;
}

let str2 = "COMPUTERPROGRAMMING";
console.log(solution2(str2, "R"));
