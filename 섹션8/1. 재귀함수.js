function solution(n) {
  function DFS(L) {
    if (L === 0) return;
    DFS(L - 1);
    console.log(L);
  }
  return DFS(n);
}

solution(3);
solution(10);
