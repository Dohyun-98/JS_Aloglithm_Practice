function solution(s) {
  s = s.toLowerCase();
  let answer = "YES";

  // 1. 문자열 s를 배열로 만든다.
  // 2. reverse 와 join함수를 만들어 문자열을 뒤집는다.
  // 3. 원래 문자열과 뒤집은 문자열을 비교한다.
  if (s.split("").reverse().join("") !== s) {
    answer = "NO";
  }
  return answer;
}

let str = "goooG";
console.log(solution(str));

function solution2(s) {
  let answer = "YES";
  let r = s.length - 1;
  let l = 0;
  while (l <= r) {
    if (s[l] !== s[r]) {
      answer = "NO";
      break;
    }
    l++;
    r--;
  }
  return answer;
}
let str2 = "gooG";
console.log(solution2(str2));
