function solution(s) {
  let answer = "";
  // 아스키 코드로 +26해서 출력
  //   s.split("").forEach((el) => {
  //     if (el.charCodeAt() >= 97) {
  //       answer += String.fromCharCode(el.charCodeAt() - 32);
  //     } else {
  //       answer += el;
  //     }
  //   });
  // 메서드 toUpperCase()를 이용해서 출력
  // answer = s.toUpperCase();
  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));
