function solution(s) {
  let answer = 0;
  for (el of s) {
    if (el.charCodeAt() >= 65 && el.charCodeAt() <= 90) {
      answer++;
    }
  }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
