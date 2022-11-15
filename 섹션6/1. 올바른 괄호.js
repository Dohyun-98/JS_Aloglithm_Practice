function solution(s) {
  let answer = "YES";
  const st = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") st.push(s[i]);
    else {
      st.pop();
    }
  }
  if (st.length !== 0) {
    answer = "NO";
  }
  return answer;
}

let a = "(()(()))(()";
let a1 = "()()()";
console.log(solution(a));
console.log(solution(a1));
