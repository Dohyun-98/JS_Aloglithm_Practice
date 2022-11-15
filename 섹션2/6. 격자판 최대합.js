function solution(arr) {
  const n = arr.length;
  const m = arr[0].length;
  // 총합의 합을 넣을 배열을 하나 만든다.
  const sumArr = [];
  // 각 열의 합, 행의 합을 구하여 배열에 넣는다.
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < m; j++) {
      sum += arr[i][j];
    }
    sumArr.push(sum);
  }

  for (let i = 0; i < m; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      sum += arr[j][i];
    }
    sumArr.push(sum);
  }
  // 최대값을 리턴한다.
  return Math.max(...sumArr);
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
