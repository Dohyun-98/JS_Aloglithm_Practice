function solution(arr) {
  let answer = 0;
  let count = 0;
  arr.forEach((el, i) => {
    if (el === 1) {
      count++;
      answer += count;
    } else if (el === 0) {
      count = 0;
    }
  });

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
