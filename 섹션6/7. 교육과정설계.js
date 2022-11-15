function solution(need, plan) {
  let answer = "YES";
  let que = need.split("");
  // need : 필수과목 순서
  // plan : 계획
  for (let i = 0; i < plan.length; i++) {
    if (que.includes(plan[i])) {
      if (que[0] !== plan[i]) {
        return "NO";
      } else {
        que.shift();
      }
    }
  }
  if (que.length > 0) answer = "NO";

  // for (let x of plan) {
  //   if (que.includes(x)) {
  //     if (x !== que.shift()) return "NO";
  //   }
  // }
  // if (que.length > 0) answer = "NO";
  return answer;
}

let a = "CBA";
let b = "CBSGASE";
console.log(solution(a, b));
