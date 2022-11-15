// 1차원 배열을 탐색하는 문제
// 앞의 수와 비교
function solution(arr) {
  let answer = [];
  arr.forEach((el, i) => {
    if (answer.length == 0) {
      answer.push(el);
    } else if (el > arr[i - 1]) {
      answer.push(el);
    }
  });
  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
