function solution(a, b, c) {
  // let max = Math.max(a, b, c);
  // if (max === a) {
  //   if (a < b + c) {
  //     answer = "yes";
  //   } else {
  //     answer = "no";
  //   }
  // } else if (max == b) {
  //   if (b < a + c) {
  //     answer = "yes";
  //   } else {
  //     answer = "no";
  //   }
  // } else {
  //   if (c < a + b) {
  //     answer = "yes";
  //   } else {
  //     answer = "no";
  //   }
  // }
  // return answer;

  // 문제 풀이
  let answer = "YES",
    max;
  let sum = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (sum - max <= max) {
    answer = "NO";
  }
  return answer;
}
console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
