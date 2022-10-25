function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  //방법1. sort
  // answer = arr.sort((a, b) => a - b).shift();
  //방법2. Math.min()
  answer = Math.min(...arr);
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
