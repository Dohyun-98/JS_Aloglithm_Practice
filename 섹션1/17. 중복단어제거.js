function solution(s) {
  // Set 자료구조를 이용한 방법
  // const answer = Array.from(new Set(s));

  // indexOf 메서드를 이용한 방법
  let answer = s.filter((el, i) => {
    return s.indexOf(el) === i;
  });
  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
