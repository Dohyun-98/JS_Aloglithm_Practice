function solution(a, b) {
  let answer = [];
  answer = a.map((el, i) => {
    if (el === b[i]) {
      return "D";
    }
    // }else if()
  });
  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
