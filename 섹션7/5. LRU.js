// 작업이 큐에 존재하는 지 검사
// 존재시, 해당 인덱스를 찾아 삭제 후 시작부분에 삽입
// 존재하지 않을시, 마지막 부분을 제거 후 새로운 부분을 시작 부분에 삽입
function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  for (let x of arr) {
    if (answer.includes(x)) {
      answer.splice(answer.indexOf(x), 1);
      answer.unshift(x);
    } else {
      answer.pop();
      answer.unshift(x);
    }
  }

  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));

function solutionDiff(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      for (let i = pos - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });

  return answer;
}

let arr2 = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solutionDiff(5, arr2));
