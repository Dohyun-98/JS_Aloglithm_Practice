function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L, sum) {
    if (sum > c) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

// function solution(c, arr) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   const ch = Array.from({ length: arr.length }, () => 0);
//   function DFS(v) {
//     if (v === ch.length) {
//       let sum = 0;
//       for (let i = 0; i < arr.length; i++) {
//         if (ch[i] === 1) {
//           sum += arr[i];
//         }
//       }
//       if (sum <= c) {
//         answer = Math.max(answer, sum);
//       }
//     } else {
//       ch[v] = 1;
//       DFS(v + 1);
//       ch[v] = 0;
//       DFS(v + 1);
//     }
//   }
//   DFS(0);
//   return answer;
// }

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
