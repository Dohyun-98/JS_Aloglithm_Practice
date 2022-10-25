function solution(s) {
  let answer = "";
  s.split("").forEach((el) => {
    if (!answer.includes(el)) {
      answer += el;
    }
  });
  return answer;
}
console.log(solution("ksekkset"));
