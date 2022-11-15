function solution(n) {
  let answer = "";
  function DFS(num) {
    if (num === 0) return;
    DFS(Math.floor(num / 2));
    answer += num % 2;
  }
  DFS(n);

  return answer;
}

console.log(solution(11));
console.log(solution(10));
