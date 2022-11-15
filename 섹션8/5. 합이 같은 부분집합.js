function solution(arr) {
  let answer = "NO";
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;
  let flag = 0;

  function DFS(L, sum) {
    if (flag) return;
    if (L === n) {
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(1, 0);
  return answer;
}

// function solution(arr) {
//   let answer = "NO";
//   const result = [];
//   const ch = Array.from({ length: arr.length + 1 }, () => 0);
//   function DFS(v) {
//     if (v === arr.length + 1) {
//       let tmp = 0;
//       for (let i = 1; i <= ch.length; i++) {
//         if (ch[i] === 1) {
//           tmp += arr[i - 1];
//         }
//       }
//       result.push(tmp);
//     } else {
//       ch[v] = 1;
//       DFS(v + 1);
//       ch[v] = 0;
//       DFS(v + 1);
//     }
//   }
//   DFS(1);
//   result.sort((a, b) => a - b);
//   for (let i = 0; i < result.length - 1; i++) {
//     if (result[i] === result[i + 1]) return "TRUE";
//   }
//   return answer;
// }

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
