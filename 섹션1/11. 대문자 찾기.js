function solution(s) {
  let answer = 0;
  for (el of s) {
    // toUpperCase()를 사용하여 원래의 값과 같으면 대문자 로 찾는 방법도 존재한다.
    // if(el===el.toUpperCase()) answer++;
    // 아래 코드는 아스키 코드에서 대문자값을 탐색하는 코드이다.
    // [string].charCodeAt() => 아스키 코드 반환
    // 대문자 : 65 ~ 90
    // 소문자 : 97 ~ 122
    if (el.charCodeAt() >= 65 && el.charCodeAt() <= 90) {
      answer++;
    }
  }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
