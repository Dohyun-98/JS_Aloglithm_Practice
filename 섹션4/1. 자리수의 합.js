function solution(n, arr) {
  let answer;
  let max = 0;
  for (let i = 0; i < n; i++) {
    let word = String(arr[i]);
    let sum = word.split("").reduce((a, b) => a + b, 0);
    // for (let j = 0; j < word.length; j++) {
    //   sum += Number(word[j]);
    // }
    if (max < sum) {
      max = sum;
      answer = word;
    } else if (sum == max) {
      answer = Math.max(Number(word), answer);
    }
  }
  return answer;
}
let arr = [137, 460, 603, 40, 521, 128, 123];
console.log(solution(7, arr));

function solution2(n, arr) {
  let answer;

  return answer;
}

let arr2 = [128, 460, 603, 40, 521, 137, 123];
console.log(solution2(7, arr));
