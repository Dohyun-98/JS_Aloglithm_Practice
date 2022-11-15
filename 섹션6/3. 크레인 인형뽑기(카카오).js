function solution(board, moves) {
  let answer = 0;
  let stack = [];
  // 배열에 접근하여 최상단 값이 0이 아닐 때 해당 값을 스택에 저장 후 그자리값을 0으로 변경
  // 스택에 넣을 때 제일 마지막 값과 같으면 마지막 값과 함께 제거 후 카운팅
  // 최종적으로 카운터를 리턴
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        if (board[j][moves[i] - 1] === stack[stack.length - 1]) {
          answer += 2;
          stack.pop();
        } else {
          stack.push(board[j][moves[i] - 1]);
        }
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }
  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
