// start 와 end를 분리 후 하나의 배열로 시간 오름차순 및 알파벳 오름차순으로 정렬한다
// 배열문을 돌면서 순차적으로 카운팅을 한다. 가진 값들 중 가장 큰값이 정답이 된다.
function solution(times) {
  let answer = 0;
  let T_line = [];
  for (let x of times) {
    T_line.push([x[0], "s"]);
    T_line.push([x[1], "e"]);
  }
  T_line.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });
  let cnt = 0;
  for (let x of T_line) {
    if (x[1] === "s") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
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
