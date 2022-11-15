function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = ps.length;
  function DFS(L, sum, time) {
    if (time > m) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + ps[L], time + pt[L]);
      DFS(L + 1, sum, time);
    }
  }
  DFS(0, 0, 0);
  return answer;
}

// function solution(m, ps, pt) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   const ch = Array.from({ length: ps.length }, () => 0);
//   function DFS(v, time, score) {
//     if (time > m) return;
//     if (v === ch.length) {
//       answer = Math.max(answer, score);
//       return;
//     } else {
//       ch[v] = 1;
//       DFS(v + 1, time + pt[v], score + ps[v]);
//       ch[v] = 0;
//       DFS(v + 1, time, score);
//     }
//   }
//   DFS(0, 0, 0);
//   return answer;
// }

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
