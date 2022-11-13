function solution(arr) {
  let answer = arr;
  for (let i = 1; i < answer.length; i++) {
    key = answer[i];
    let j;
    for (j = i - 1; j >= 0 && answer[j] > key; j--) {
      // 선택된 key값보다 answer[j]가 클 경우 오른쪽으로 한칸씩 민다.
      answer[j + 1] = answer[j];
    }
    console.log(j);
    answer[j + 1] = key;
  }
  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));

function solutionDiff(arr) {
  const answer = [];
  return answer;
}

let arr2 = [11, 7, 5, 6, 10, 9];
console.log(solutionDiff(arr2));
