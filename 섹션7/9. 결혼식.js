function solution(times) {
  let answer = 0;
  times.sort((a, b) => {
    if (a[0] === [b[0]]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  let st = 0;
  for (let x of times) {
    if (x[1] >= st) {
      answer++;
      st = x[0];
    }
  }
  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
