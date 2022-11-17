function solution(board) {
  let answer = 0;
  let n = board.length;
  let m = board[0].length;
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];
  function DFS(x, y) {
    if (x === m - 1 && y === n - 1) answer++;
    for (let i = 0; i < dx.length; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && nx < m && ny >= 0 && ny <= n && board[nx][ny] === 0) {
        board[nx][ny] = 1;
        DFS(nx, ny);
        board[nx][ny] = 0;
      }
    }
  }
  board[0][0] = 1;
  DFS(0, 0);
  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
