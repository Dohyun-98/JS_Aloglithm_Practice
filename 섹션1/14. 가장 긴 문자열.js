function solution(s) {
  let answer = "";
  let max = 0;
  for (el of s) {
    if (el.length >= max) {
      answer = el;
      max = el.length;
    }
  }
  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
