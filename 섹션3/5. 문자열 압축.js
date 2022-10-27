function solution(s) {
  let answer = "";
  let cnt = 1;
  s = s + " ";
  s.split("").forEach((el, i) => {
    if (el === s[i + 1]) {
      cnt++;
    } else {
      answer += el;
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  });

  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
