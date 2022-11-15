function solution(a, b) {
  const answer = a.map((el, i) => {
    if (el === b[i]) {
      return "D";
    } else if (
      (el === 3 && b[i] === 2) ||
      (el === 2 && b[i] === 1) ||
      (el === 1 && b[i] === 3)
    ) {
      return "A";
    } else {
      return "B";
    }
  });
  return answer.join("");
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
