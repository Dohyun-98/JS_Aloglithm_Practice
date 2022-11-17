function solution(n) {
  let answer;
  function DFS(v) {
    if (v === 0) {
      return 1;
    }
    return v * DFS(v - 1);
  }
  answer = DFS(n);
  return answer;
}

console.log(solution(5));
