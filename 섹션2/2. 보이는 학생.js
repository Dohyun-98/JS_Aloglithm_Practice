function solution(arr) {
  let answer = 0;
  let current = 0;
  arr.forEach((el, i) => {
    if (answer.length == 0) {
      current = el;
      answer++;
    } else if (current < el) {
      current = el;
      answer++;
    }
  });
  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
