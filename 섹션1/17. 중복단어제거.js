function solution(s) {
  const answer = new Set();
  for (let i = 0; i < s.length; i++) {
    answer.add(s[i]);
  }
  return [...answer];
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
