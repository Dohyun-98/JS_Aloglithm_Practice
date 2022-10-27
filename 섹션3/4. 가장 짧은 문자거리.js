function solution(s, t) {
  let answer = [];
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      count = 0;
      answer.push(count);
    } else {
      count++;
      answer.push(count);
    }
  }
  count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      count = 0;
    } else {
      count++;
      if (answer[i] > count) {
        answer[i] = count;
      }
    }
  }
  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
