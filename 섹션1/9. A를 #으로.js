function solution(s) {
  let answer = "";
  for (el of s) {
    answer += el == "A" ? "#" : el;
  }
  return answer;
}

let str = "BANANA";
console.log(solution(str));

function solution2(s) {
  let answer = s;
  answer = answer.replaceAll("A", "#");
  return answer;
}

let str2 = "BANANA";
console.log(solution2(str2));
