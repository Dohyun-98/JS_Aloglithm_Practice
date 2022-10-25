function solution(arr) {
  let answer = [];
  let current = 0;
  arr.forEach((el, i) => {
    if (answer.length == 0) {
      current = el;
      answer.push(el);
    } else if (current < el) {
      current = el;
      answer.push(el);
    }
  });
  console.log(answer);
  return answer.length;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
